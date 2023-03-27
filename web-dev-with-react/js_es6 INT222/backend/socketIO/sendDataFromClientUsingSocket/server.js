const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req,  res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('myClientEvent', (msg) => {
        console.log('Message: ' + msg);
    });

});

http.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
});
