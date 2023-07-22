// {
  const http = require('http');
  const url = require('url');

  const isPrime = (number) => {
    if(number <= 1) return false;
    if(number <= 3) return true;
    if(number % 2 == 0 || number % 3 == 0) return false;
    for(let i = 5; i * i <= number; i += 6) {
      if((number % i == 0) || (number % (i + 2) == 0)) 
        return false;
    }
    return true;
  }

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // take the url
    const query = parsedUrl.query;  // take the number
    if(parsedUrl.pathname == '/isprime' && query.number) {
      const number = parseInt(query.number);
      const isPrimeNumber = isPrime(number);
      const response = {
        isPrime: isPrimeNumber
      };

      // set CORS header to allow cross-origin requests
      res.setHeader('Access-Control-Allow-Origin', "*");
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      res.writeHead(200, { 'Content-Type' : 'application/json'});
      res.end(JSON.stringify(response));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain'});
      res.end('Not Found');
    }
  });


  const port = 3000;
  server.listen(port, () => {
    console.log('Server Listening at port: ', port);
  });
// }

// const http = require('http');
// const url = require('url');

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const query = parsedUrl.query;
//   if (parsedUrl.pathname === '/isprime' && query.number) {
//     const number = parseInt(query.number);
//     const isPrimeNumber = isPrime(number);
//     const response = {
//       isPrime: isPrimeNumber
//     };

//     // Set CORS headers to allow cross-origin requests
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(response));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
