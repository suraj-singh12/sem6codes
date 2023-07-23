const http = require('http');
const url = require('url');


function isPrime(n) {
  if(n <= 1) return false;
  if(n <= 3) return true;
  if(n % 2 == 0 || n % 3 == 0) return false;
  for(let i = 5; i * i <= n; i += 6) {
    if(n % i == 0 || n % ( i + 2) == 0) return false;
  }
  return true;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  if(parsedUrl.pathname == '/isprime' && query.number) {
    const number = parseInt(query.number);
    const isPrimeNumber = isPrime(number);
    const response = {
      isPrime: isPrimeNumber,
    }

    // set CORS header to allow cross-origin request
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log('Server Listening at port:', port);
});
