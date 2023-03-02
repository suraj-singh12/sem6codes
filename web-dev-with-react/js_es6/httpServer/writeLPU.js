const fs = require('fs');
const http = require('http');
const { resolve } = require('path');

const server = http.createServer((req, response) => {
    response.setHeader('Content-Type', 'text/html');

    if(req.url == '/') {
        // write sample heading to webpage
        response.write('<h1>Welcome to LPU</h1>');
        // populate home.html
        try {
            fs.writeFileSync('home.html', '<h1 style="color: blue">Welcome to lpu admissions');
            console.log('created: home.html');
        } catch(err) {
            console.log('error in creating: home.html');
        }
        // populate admissions.html
        try {
            let admissionsData = (`
                    <label for="name"> Name: 
                        <input type="text" id="name">
                    </label>
                    <label for="query"> Query: 
                        <input type="text" id="query">
                    </label>
                    <button type="submit"> Submit</button>
            `)
            fs.writeFileSync('admissions.html', admissionsData);
            console.log('created: admissions.html');
        } catch(err) {
            console.log('error in creating: admissions.html');
        }

    } else if(req.url == '/home') {
        // read home file 
        let data = '';
        try {
            data = fs.readFileSync('home.html');
        } catch(err) {
            console.log('error while reading: home.html');
        }
        // render its data
        response.write(data);
    } else if(req.url == '/admissions') {
        // read admissions file
        let data = '';
        try {
            data = fs.readFileSync('admissions.html');
        } catch(err) {
            console.log('error in reading: admissions.html');
        }
        // render its data
        response.write(data);
    } else {
        // for invalid routes
        response.write('invalid page');
    }
    // close the response
    response.end();
})

// init the server
let port = 3000;
server.listen(port);
console.log(`Server is running at PORT: ${port}`);
