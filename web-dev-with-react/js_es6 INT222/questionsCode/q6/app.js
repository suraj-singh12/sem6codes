const http = require('http');
const url = require('url');
const port = 3000;

function findNthFib(n) {
    if(n <= 1) return n;
    else n -= 1;
    let first = 0, second = 1;
    let next = 0;
    while(n > 0) {
        next = first + second;
        first = second;
        second = next;
        n--;
    }
    return next;
}


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    console.log(parsedUrl);
    if(parsedUrl.pathname == '/nthNumber' && query.n) {
        const n = parseInt(query.n);
        const nthTerm = findNthFib(n);
        const response = {
            nthTerm: nthTerm,
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');

        res.writeHead(200, { 'Content-Type' : 'application/json'});
        res.end(JSON.stringify(response));
    } else {
        res.setHeader(404, {'Content-Type' : 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log('Server Listening at port:', port);
});