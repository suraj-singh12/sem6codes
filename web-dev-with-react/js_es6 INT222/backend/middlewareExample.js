const express = require('express');
const app = express();


app.all('/users', (req, res, next) => {
    console.log('I am called for all HTTP methods: GET, POST, PUT, DELETE.');
    next(); // calling next middleware fn / fn in line
});


app.get('/users', (req, res) => {
    res.send('GET request to the homepage');
})

app.post('/users', (req, res) => {
    res.send('POST request to the homepage');
})

app.get('/', (req, res) => {
    res.send('Routes: /users');
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
})