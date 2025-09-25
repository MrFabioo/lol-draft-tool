import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' },
});

const draftSequence = [
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' },
];

let rooms = {};
let timers = {};

function startTimer(roomId) {
  const room = rooms[roomId];
  if (!room) return;

  if (timers[roomId]) return;

  room.timer = 30;
  timers[roomId] = setInterval(() => {
    room.timer -= 1;
    io.to(roomId).emit('updateRoom', room);

    if (room.timer <= 0) {
      clearInterval(timers[roomId]);
      delete timers[roomId];

      const step = draftSequence[room.currentStep];

      if (step) {
        if (!room.championList[room.currentStep]) {
          room.championList[room.currentStep] = {
            id: null,
            name: null,
            action: step.type,
            team: step.team === 'red' ? 'red' : 'blue',
            auto: true,
          };
        }
      }

      room.currentStep += 1;

      if (room.currentStep >= draftSequence.length) {
        room.status = 'finished';
        room.timer = '';
        io.to(roomId).emit('updateRoom', room);

        clearInterval(timers[roomId]);
        delete timers[roomId];
        return;
      }

      room.timer = 30;
      io.to(roomId).emit('updateRoom', room);
      startTimer(roomId);
    }
  }, 1000);
}

io.on('connection', (socket) => {
  console.log('Nowy klient podłączony');

  socket.on('joinRoom', ({ roomId, role }) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = {
        championList: [],
        players: {},
        status: 'waiting',
        currentStep: 0,
        timer: 30,
      };
    }

    rooms[roomId].players[socket.id] = { role, ready: false };

    socket.emit('updateRoom', rooms[roomId]);
    io.to(roomId).emit('updateRoom', rooms[roomId]);
  });

  socket.on('playerReady', ({ roomId }) => {
    const player = rooms[roomId]?.players[socket.id];
    if (!player || player.role === 'Spectator') return;

    player.ready = true;

    const players = Object.values(rooms[roomId].players);
    if (
      players.filter((p) => p.role === 'red')[0]?.ready &&
      players.filter((p) => p.role === 'blue')[0]?.ready
    ) {
      rooms[roomId].status = 'drafting';
      startTimer(roomId);
    }

    io.to(roomId).emit('updateRoom', rooms[roomId]);
  });

  socket.on(
    'updateChampionSelect',
    ({ roomId, champion, actionType, team }) => {
      const room = rooms[roomId];
      const step = draftSequence[room.currentStep];

      if (!rooms || room.status !== 'drafting' || !step) return;

      if (
        step.type !== actionType ||
        step.team.toLowerCase() !== team.toLowerCase()
      ) {
        socket.emit('invalidAction');
        return;
      }

      const player = room.players[socket.id];
      if (!player) return;

      if (
        (player.role === 'red' && champion.team === 'red') ||
        (player.role === 'blue' && champion.team === 'blue')
      ) {
        room.championList[room.currentStep] = {
          ...champion,
          step: room.currentStep,
        };

        io.to(roomId).emit('updateRoom', room);
      }
    }
  );

  socket.on('confirmChampion', ({ roomId }) => {
    const room = rooms[roomId];
    if (!room) return;

    room.currentStep += 1;

    if (room.currentStep === draftSequence.length) {
      room.status = 'finished';
      room.timer = '';
      io.to(roomId).emit('updateRoom', room);
      clearInterval(timers[roomId]);
      delete timers[roomId];
      return;
    }

    room.timer = 30;
    io.to(roomId).emit('updateRoom', room);
    startTimer(roomId);
  });

  socket.on('disconnect', () => {
    console.log('Klient rozłączony');

    for (const roomId in rooms) {
      if (rooms[roomId].players[socket.id]) {
        delete rooms[roomId].players[socket.id];

        if (Object.keys(rooms[roomId].players).length === 0) {
          delete rooms[roomId];
          if (timers[roomId]) {
            clearInterval(timers[roomId]);
            delete timers[roomId];
          }
        }
      }
    }
  });
});

server.listen(3000, () => console.log('Socket.io działa na 3000'));
