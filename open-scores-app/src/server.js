var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public');
});

io.on('connection', function(socket) {
    console.log('a user connected');
  socket.on('disconnect', function(socket){
    console.log('user disconnected');
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });
});


http.listen(3001, function() {
    console.log('listening on *:3001');
});
