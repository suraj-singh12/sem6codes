const express = require('express');
const app = express();
let fs  = require('fs');

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/' + 'form.html');
});

app.get('/apply', (req, res)=> {
    response = {
        firstName:req.query.first_name,
        lastName:req.query.last_name,
        gender:req.query.gender,
        address:req.query.address
    }
    // console.log(req);
    // console.log(req.query);
    // console.log(response);
    fs.appendFile('logFile.log', `,\n${JSON.stringify(response)}`, (err, data) => {
        if (err) throw err;
        console.log('Data written to file');
        });
    res.send(response);
});

app.listen(8000, () => {
    console.log('Server is running at : http://localhost:8000');
});
