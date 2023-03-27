const express = require('express');
const app = express();
const wiki = require('./wiki.js');

app.use('/wiki', wiki);
app.listen(3001, () => {
    console.log('Server is running on port 3001');
    console.log('http://localhost:3001');
})