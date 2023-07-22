const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());
app.get('/', (req, res) => {
    const studentInfo = {
        name: 'StudentX',
        regNo: '1200xxxx',
        Grade: 'O'
    };
    res.cookie('studentInfo', studentInfo).send(`<h1>Cookie has been set</h1>`);
});
app.get('/clear', (req, res) => {
    console.log('Clearing Cookie: ', req.cookies);
    res.clearCookie('studentInfo');
    res.send('<h1>Cookies cleared!</h1>');
});

app.listen(port, () => {
    console.log('server listening at port:', port);
});