const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});
app.post('/getFile', (req, res) => {
    const fileName = req.body.fileName;
    const file = path.join(__dirname, fileName);
    if(fs.existsSync(file)) res.sendFile(file);
    else res.send('No such file exists!!')
});
app.listen(port, () => {
    console.log('Listening on port :', port);
});

