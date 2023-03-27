const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

let clients = 0;

io.on('connection', (socket) => {       // open multiple windows of this localhost, and you will see the number of clients connected updating
    clients++;
    io.emit('broadcast', {msg: clients + ' clients connected'});
    socket.on('disconnect', () => {
        clients--;
        io.emit('broadcast', {msg: clients + ' clients connected'});
    });
});

http.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
});
