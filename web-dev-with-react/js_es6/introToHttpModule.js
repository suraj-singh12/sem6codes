// http module
const http = require('http');
const fs = require('fs');

let data = fs.readFileSync('myFile.txt');
let i = 0;

const server = http.createServer((req, response) => {
    i++;
    console.log('It is a request for ', req.url);
    // response.write('Hello LPU');
    // response.write(data.toString());

    // response.setHeader('Content-Type', 'text/html');
    // response.write('<h1>Listen here, this is an html</h1>');

    response.setHeader('Content-Type', 'text/html');
    if(req.url == '/') {
        response.write('<h1>Welcome</h1>')
        fs.writeFile('byServer.txt','this file is written by server' + i, (err) => {
            if(err) console.log('error in writing file');
            else console.log('file written successfully')
        });
    } else if(req.url == '/home') {
        response.write('<h1>Home Page</h1>')
    }
    response.end();
});

let port = 3243;
server.listen(port);
console.log(`Server is running at PORT : ${port}`);
