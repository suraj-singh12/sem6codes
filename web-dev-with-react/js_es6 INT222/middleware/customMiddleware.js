// const express = require('express');
// const app = express()
// const myLogger = (req, res, next) => {
//     console.log('Before Logged');
//     next();
//     console.log('After Logged');
// }

// app.use(myLogger);           // myLogger is at top of stack

// app.get('/', (req, res) => {
//     console.log('Hello World!');
//     res.send('Hello World!');
// });

// app.get('/hi', (req, res) => {
//     console.log('Hi there');
//     res.send('Hi there');
// })

// app.listen(3200, () => {
//     console.log('Server is running on port 3200')
//     console.log('http://localhost:3200')
// })




const express = require('express');
const app = express()
const myLogger = (req, res, next) => {
    console.log('Before Logged');
    console.log('After Logged');
}


app.get('/', (req, res, next) => {
    console.log('Hello World!');
    next();
    console.log('after world')
    res.send('Hello World!');
});
app.use(myLogger);              // comes in stack below get('/') method


app.listen(3200, () => {
    console.log('Server is running on port 3200')
    console.log('http://localhost:3200')
})




// const express = require('express');
// const app = express()
// const myLogger = (req, res, next) => {
//     console.log('Before Logged');
//     next();
//     console.log('After Logged');
// }
// // app.use(myLogger);

// app.get('/', myLogger, (req, res) => {
//     console.log('Hello World!');
//     res.send('Hello World!');
// });

// app.listen(3200, () => {
//     console.log('Server is running on port 3200')
//     console.log('http://localhost:3200')
// })

