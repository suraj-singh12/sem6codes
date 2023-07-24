const express = require('express');
const app = express();
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'form2.html');
})

app.post('/apply', (req, res) => {
    response = {
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        gender:req.body.gender,
        address:req.body.address
    }
    console.log(response)
    res.send(response);
})

app.listen(8900, ()=> {
    console.log('server running at : http://localhost:8900/')
})