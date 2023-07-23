const net = require('net');

const server = net.createServer((socket) => {
    console.log('a client is connected');

    socket.on('data', (data) => {
        const studentDetails = JSON.parse(data);
        console.log(studentDetails);

        socket.write('Thank you!');
        socket.end();
    });

    socket.on('end', () => {
        console.log('a client is Disconnected');
    });

    socket.on('error', (err) => {
        console.error('Socket Error: ', err.message);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log('Server is Listening at port', port);
})