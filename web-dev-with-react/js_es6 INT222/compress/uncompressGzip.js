// let zlib = require('zlib');
// let fs = require('fs');
// let gunzip = zlib.createGunzip();       

// let r = fs.createReadStream('test.txt.gz');
// let w = fs.createWriteStream('test.txt');
// r.pipe(gunzip).pipe(w);


let zlib = require('zlib');
let data = 'This is nodejs class';

zlib.gzip(data, (err, buffer) => {
    zlib.gunzip(buffer, (err, buffer) => {
        console.log(buffer.toString('utf8'));
    })
});
