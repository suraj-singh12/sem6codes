// http module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, response) => {
    response.setHeader('Content-Type', 'text/html');

    if(req.url == '/') {
        response.write('<h1>Welcome</h1>')
        fs.writeFile('byServer.txt','this file is written by server', (err) => {
            if(err) console.log('error in writing file');
            else console.log('file written successfully')
        });
    } else if(req.url == '/home') {
        response.write('<h1>Home Page</h1>')
    } else {
        response.write('<h1>invalid page</h1>')
    }
    response.end();
});

let port = 3243;
server.listen(port);
console.log(`Server is running at PORT : ${port}`);
