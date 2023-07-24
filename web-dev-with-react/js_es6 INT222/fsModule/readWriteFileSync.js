const fs = require('fs');

try {
    fs.writeFileSync('myFile.txt', 'data of my file');
    console.log('data written successfully')
} catch(err) {
    console.log('error bauau')
}

try {
    let data = fs.readFileSync('myFile.txt');
    console.log(data.toString());
} catch(err) {
    console.log('error in reading')
}

