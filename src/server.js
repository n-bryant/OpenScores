let express = require('express');
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('new-message', function(msg){
      console.log(msg);
      io.emit("receive-message", msg);
    });
    socket.on('new-score', function(scoreChange){
      io.emit('receive-score', scoreChange);
      console.log("test");
    });


});




http.listen(3001, function() {
    console.log('listening on *:3001');
});
