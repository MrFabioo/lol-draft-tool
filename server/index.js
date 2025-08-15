import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' },
});

let rooms = {};

io.on('connection', (socket) => {
  console.log('Nowy klient podłączony');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    if (!rooms[roomId]) rooms[roomId] = [];
    socket.emit('updateChampionSelect', rooms[roomId]);
  });

  socket.on('updateChampionSelect', ({ roomId, newList }) => {
    rooms[roomId] = newList;
    socket.to(roomId).emit('updateChampionSelect', newList);
  });

  socket.on('disconnect', () => {
    console.log('Klient rozłączony');
  });
});

server.listen(3000, () => console.log('Socket.io działa na 3000'));
