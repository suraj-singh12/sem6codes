const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const operations = (req, res, next) => {
    const number = Number(req.body.number);
    req.result = {
        increment: number + 1,
        decrement: number - 1,
        square: number * number,
    };
    next();
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}) 

app.post('/calculateData', operations, (req, res) => {
    const { increment, decrement, square } = req.result;
    res.send(
    `Number: ${req.body.number}<br>Increment: ${increment}<br>Decrement: ${decrement}<br>Square: ${square}`
  );
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});