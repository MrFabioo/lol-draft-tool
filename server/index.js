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
      players.filter((p) => p.role === 'Red')[0]?.ready &&
      players.filter((p) => p.role === 'Blue')[0]?.ready
    ) {
      rooms[roomId].status = 'drafting';
    }

    io.to(roomId).emit('updateRoom', rooms[roomId]);
  });

  socket.on(
    'updateChampionSelect',
    ({ roomId, champion, actionType, team }) => {
      const room = rooms[roomId];
      const step = draftSequence[room.currentStep];

      if (!rooms || room.status !== 'drafting' || !step) return;

      if (step.type !== actionType || step.team !== team) {
        socket.emit('invalidAction');
        return;
      }

      const player = room.players[socket.id];
      if (!player) return;

      if (
        (player.role === 'Red' && champion.team === 'Red') ||
        (player.role === 'Blue' && champion.team === 'Blue')
      ) {
        room.championList.push(champion);
        room.currentStep += 1;
        io.to(roomId).emit('updateRoom', room);
      }
    }
  );

  socket.on('disconnect', () => {
    console.log('Klient rozłączony');

    for (const roomId in rooms) {
      if (rooms[roomId].players[socket.id]) {
        delete rooms[roomId].players[socket.id];

        if (Object.keys(rooms[roomId].players).length === 0) {
          delete rooms[roomId];
        }
      }
    }
  });
});

server.listen(3000, () => console.log('Socket.io działa na 3000'));
