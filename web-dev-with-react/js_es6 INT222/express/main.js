// const express = require('express');
// const app = express();

// app.get('/hello', (req, res) => {
//     res.send('Hello World');
// });


// let port = 8000;
// app.listen(port, () => {
//     console.log('Server is running on port 8000');
//     console.log('http://localhost:8000/hello');
//     }
// );


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express server home')
})

app.get('/hello', (req, res) => {
    // console.log('hello world')
    res.send('hello world');
})



app.listen(8000, () => {
    console.log('Server running at port: 8000');
    console.log('http://localhost:8000/')
})