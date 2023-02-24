/**
 * Types of Modules:
 * 
 * Core Modules : pre-installed (fs, util, url, http, etc)
 * Local Modules: we create for ourself 
 * Third Party Modules: need to be installed
 * 
 * 
 * Node Package Manager (NPM):
 * online repository for open-source nodejs packages, the node community around the world creates useful modules and adds them to this repository, 
 * and we install those packages into our systems with the help of npm
 * 
 */


const fs = require('fs');       // is an asynchronous fn

let fileName = 'myFile.txt';
let data = 'this is a file';

// fs.writeFile(fileName, data, (err)=> {
//     if(err) console.log("An error occurred!\n");
//     else console.log('data written')
// });

fs.readFile(fileName, (err, data) => {
    if(err) console.log('an error occurred!\n');
    else {
        console.log(data, '\n');      // will give op in buffer form
        console.log(data.toString());       // convert to type String
    }
});
console.log('myProgram ends here');

/**
 * Output: 

myProgram ends here
<Buffer 74 68 69 73 20 69 73 20 61 20 66 69 6c 65 2e 20 41 6e 64 20 69 20 61 6d 20 61 70 
70 65 6e 64 69 6e 67 20 6d 6f 72 65 20 64 61 74 61 20 74 6f 20 69 74 ... 1 more byte>    

this is a file. And i am appending more data to it.

why does it happen so?
Because nodejs is asynchronous, it does not wait for anything.

*/