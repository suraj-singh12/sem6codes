const express = require('express');
const app = express();
let fs  = require('fs');

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/' + 'form.html');
});

app.get('/apply', (req, res)=> {
    response = {
        firstName:req.query.first_name,
        lastName:req.query.last_name,
        gender:req.query.gender,
        address:req.query.address
    }
    // console.log(req);
    // console.log(req.query);
    // console.log(response);
    
    let data = response;
    let result = (`
    <table border="1px" style="padding: 5px">
    <thead>
        <tr>
            <th style="padding: 1rem">First Name</th>
            <th style="padding: 1rem">Last Name</th>
            <th style="padding: 1rem">Gender</th>
            <th style="padding: 1rem">Address</th>
        </tr> 
    </thead> 
    <tbody> 
        <tr>
            <td style="padding: 1rem">${data.firstName}</td>
            <td style="padding: 1rem">${data.lastName}</td>
            <td style="padding: 1rem">${data.gender}</td>
            <td style="padding: 1rem">${data.address}</td>
        </tr>
    </tbody>
    </table>
    `);
    fs.appendFile('logFile.log', `,\n${JSON.stringify(response)}`, (err, data) => {
        if (err) throw err;
        console.log('Data written to file');
        });
    res.send(result)
    // res.send(response);
});

app.listen(8000, () => {
    console.log('Server is running at : http://localhost:8000');
});


// try these changes: 
// use post in html, then app.post in js, then use body-parser, then use req.body instead of req.query