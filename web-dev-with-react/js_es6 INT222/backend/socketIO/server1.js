const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    // sending message to client
    socket.emit('event', {greetings: 'hello from server <br />'});
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    })
});

http.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
});