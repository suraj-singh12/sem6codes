// localhost:3200/user  : No Authentication
// localhost:3200/user?admin=true : Welcome admin

const express = require('express');
const app = express();

const auth = (req, res, next) => {
    let query = req.query;
    console.log(query);
    if(query.admin && query.admin == 'true') {
        res.send('<h1> Welcome Admin </h1>');
    } else {
        next();
    }
}

app.get('/', (req, res) => {
    res.send('Routes: /user');
});

app.get('/user', auth, (req, res) => {
    res.send('<h1> No Authentication </h1>');
});

app.listen(3200, (req, res) => {
    console.log('Server is running on port 3200');
    console.log('http://localhost:3200');
})