const fs = require('fs');

// fs.appendFile('myFile.txt', 'Appending this special line', (err) => {
//     if(err) console.log('error occurred while appending');
//     else console.log('appended data successfully');
// })


try {
    fs.appendFileSync('myFile.txt', '---appending file');
    console.log('successfully appended data');
} catch(err) {
    console.log('error appending to the file')
}

