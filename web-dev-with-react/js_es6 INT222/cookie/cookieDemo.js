const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());            // middleware cookieParser, will be called everytime a request is made to any route before the route is called

// set the cookie
app.get('/', (req, res) => {
    let userData = {
        name: 'John',
        age: 30,
        profile: 'admin'
    };
    // res.cookie('course', 'html').send('Our website has set the cookies');
    res.cookie('user', userData).send('<h1>Our website has set the cookies</h1>');
    console.log('Set Cookies: ', req.cookies);
});

// clear the cookie
app.get('/clear', (req, res) => {
    // res.clearCookie('course', 'html');
    res.clearCookie('user')
    res.send('<h1>Cookies cleared</h1>');
    console.log('Erased Cookies: ', req.cookies);
});

app.listen(3200, () => {
    console.log('Server is running on port 3200');
    console.log('http://localhost:3200');
})