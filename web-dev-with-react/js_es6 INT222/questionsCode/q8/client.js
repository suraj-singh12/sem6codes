const net = require('net');
const readlineSync = require('readline-sync');

const client = net.createConnection({port: 3000}, () => {
    console.log('Connected to Server');

    const studDetails = {
        name: 'Ram',
        regNo: '1200xxxx',
        stream: 'B.Tech'
    };

    client.write(JSON.stringify(studDetails));
});

client.on('data', (data) => {
    console.log(data.toString());
    // client.end();
});

client.on('end', () => {
    while(readlineSync.question('End Connection (y/n)?').toLowerCase() !== 'y');
    console.log('disconnected from server!');
});

client.on('error', (err) => {
    console.error('Socket Error: ', err.message);
})
