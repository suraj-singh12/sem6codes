let fs = require('fs');

fs.writeFile('newFile.txt', 'writing this data', (err) => {
    if(err) console.log('error in reading');
    else console.log('Finally written the file')
});


fs.readFile('newFile.txt', (err, data) => {
    if(err) console.log('error in reading Baua');
    else console.log('data: ', data.toString());
})
