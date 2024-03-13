var http = require('http');
var socket = require('socket.io');
const app = http.createServer(server);
const io = socket(app);
app.listen(80);

app.get("/", (req, res) => res.send({message:"damn bro its working"}));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
