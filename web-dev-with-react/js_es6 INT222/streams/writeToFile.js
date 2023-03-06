let fs = require('fs');

const writeToFile = (data) => {
    fs.appendFileSync('test.txt', data, (err) => {
        if(err)
        console.log('failed to write data');
    });
};

let i = 1;
const prompt = require('prompt-sync')({ sigint: true });
while(i < 5) {
    data = prompt('Enter the data: ');   
    writeToFile(data);
    i++;
}