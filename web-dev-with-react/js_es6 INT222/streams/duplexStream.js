const { createReadStream, createWriteStream } = require('fs');
const writable = createWriteStream('test3.txt', {flags: 'a'});
// write to the writable stream
writable.write('This is a test\n');
writable.end();
writable.on('finish', () => {
    console.log('Write operation finished');
});

// listen for data from the readable stream
const readable = createReadStream('test3.txt');
readable.on('data', (chunk) => {
    console.log(`Received chunk: \n${chunk.toString()}`);
});
readable.on('end', () => {
    console.log('Finished reading file.');
});
