const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
let visitorCount = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('connection established');
    visitorCount++;
    if(visitorCount % 2 != 0)
        socket.emit('visitorCount', visitorCount);
    
    socket.on('disconnect', () => {
        visitorCount--;
        console.log('A user disconnected!');
    });

    socket.on('studentDetails', (data) => {
        console.log('studentDetails: ', data);
        socket.emit('ConnectionEstablished', '-> A connection to the server is established successfully!' );
    });
});


http.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
