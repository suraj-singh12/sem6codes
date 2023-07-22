// write an node application which can send and receive files over the http protocol using expressJS
const express = require('express');
const app = express();
const port = 3000;

// A middleware function is called during the processing of an incoming HTTP request. 
// It sits in the middle between the server receiving the request and the final route handler that sends the response. 
// The middleware is executed before the request reaches the route handler, 
// allowing it to perform actions on the request and response objects or execute specific tasks.

// This will be called before every route request
const globalMiddleware = (req, res, next) => {
    console.log('Middleware function!!');
    next();
}
app.use(globalMiddleware);      // specifies the global middleware function that should be called before every route request

const specificMiddleware = (req, res, next) => {
    console.log('Middleware for /home route only');
    next();
}


app.get('/', (req, res) => {
    res.send('Welcome to / root');
});

app.get('/home', specificMiddleware, (req, res) => {
    res.send('Welcome to Homepage');
});

app.post('/data', (req, res) => {
    res.send(`{
        file: 'newFile',
        bytes: '543',
    }`);
})

app.listen(port, () => {
    console.log('listening at port:', port);
})