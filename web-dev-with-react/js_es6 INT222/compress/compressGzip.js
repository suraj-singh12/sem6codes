// let zlib = require('zlib');
// let fs = require('fs');

// let gzip = zlib.createGzip();       
// // other algos are cretateBrotliCompress(), createDeflate(), createDeflateRaw(), createGunzip(), createInflate(), createInflateRaw(), createUnzip()

// let r = fs.createReadStream('test.txt');
// let w = fs.createWriteStream('test.txt.gz');
// r.pipe(gzip).pipe(w);



let zlib = require('zlib');
let data = 'This is nodejs class';
zlib.gzip(data, (err, buffer) => {
    if(err) {
        console.log(err);
    } else {
        console.log(buffer.toString());
    }
});
console.log('Data has been compressed');