

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'my-cookie',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge : 10000}        // this is in milliseconds. 10000 ms = 10 seconds
}));

app.get('/', (req, res) => {
    if(req.session.page_views) {
        req.session.page_views++;
        res.send('No of visits ' + req.session.page_views);
    } else {
        req.session.page_views = 1;
        console.log(req.session)
        res.send('You are a first time visitor OR [ the cookie expired after session being idle for maxAge :-) ]');
    }
});


app.listen(3200, ()=> {
    console.log('Server is running on port 3200');
    console.log('http://localhost:3200')
})