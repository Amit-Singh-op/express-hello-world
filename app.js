const io = require("socket.io");

const server = io.listen(3000);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
