let http = require('http');
let url = require('url');
let fs = require('fs');
let server = http.createServer(function(req, res) {
    var file = './' + url.parse(req.url).pathname;      // read the filename entered in the browser
    // read that file and render
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});


server.listen(8000, () => {
    console.log('Server running at port 8000');
});
