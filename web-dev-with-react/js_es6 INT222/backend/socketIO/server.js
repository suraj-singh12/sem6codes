const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    // console.log('sending file', __dirname + '/' + 'index.html');
    res.sendFile( __dirname + '/' + 'index.html');       
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


http.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
})

// .on() is used for listening to the message
// .emit() is used for sending the message

// socket.on(name of the event, callback function)
// socket.emit(name of the event, data)