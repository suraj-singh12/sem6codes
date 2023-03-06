var url = require('url');
var adr = 'http://localhost:8000/default.htm?name=Raj&Age=20';

var q = url.parse(adr);         // main url.parse() method

console.log(q.host);        // returns 'localhost:8000'
console.log(q.href);    // returns 'http://localhost:8000/default.htm?name=Raj&Age=20'

console.log(q.hostname);        // returns 'localhost'
console.log(q.port);            // returns 8000
console.log(q.pathname);    // returns '/default.htm'
console.log(q.search);      // returns '?name=Raj&Age=20'
console.log(q.path);        // returns '/default.html?name=Raj&Age=20'
console.log(q.auth);        // returns 'null'
console.log(q.protocol);    // returns 'http'
console.log(q.query.name);      // returns 'undefined'
console.log(q.query);       // returns 'name=Raj&Age=20'