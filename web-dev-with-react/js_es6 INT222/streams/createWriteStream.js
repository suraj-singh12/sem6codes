var fs = require('fs');
var data = 'This is node.js class';
var writer = fs.createWriteStream('test2.txt');

writer.write(data, 'utf8');
writer.end();
writer.on('finish', function() {
    console.log('write completed');
});
writer.on('error', function(err) {
    console.log(err);
});
