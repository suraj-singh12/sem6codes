
// create read Stream
var fs = require('fs');
var data = '';
var reader = fs.createReadStream('test.txt', {start: 0, end:1000});

reader.setEncoding('UTF8');
reader.on('data', function(chunk) {
    data = chunk;
    console.log(`Received ${chunk.length} bytes of data.`);
});
reader.on('end', function() {
    console.log('Finished reading file.');
    console.log('data: ', data)
});
reader.on('error', function(err) {
    console.error(`An error occurred: ${err}`);
});

