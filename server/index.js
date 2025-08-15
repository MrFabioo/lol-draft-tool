import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' },
});

let championList = [];

io.on('connection', (socket) => {
  console.log('Nowy klient podłączony');

  socket.emit('updateChampionSelect', championList);

  socket.on('updateChampionSelect', (newList) => {
    championList = newList;
    socket.broadcast.emit('updateChampionSelect', championList);
  });

  socket.on('disconnect', () => {
    console.log('Klient rozłączony');
  });
});

server.listen(3000, () => console.log('Socket.io działa na 3000'));
