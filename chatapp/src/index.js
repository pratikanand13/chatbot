const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));


// server(emit) -> client (recieve) - countUpdated
// client(emit) -> server (recieve) - increment
let text = "hello"
io.on("connection", (socket) => {
  console.log("New web-socket connection")
  // socket.emit('countUpdated' , count)  
  // socket.on('increment', () => {
  //   count++
  //   io.emit('countUpdated',count)
  //   //socket.emit('countUpdated', count)
  // })
  socket.emit('message')
           
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});                                           
