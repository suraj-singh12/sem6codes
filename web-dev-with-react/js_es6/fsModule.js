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

// ---------------------------------------------------
// fs.writeFile(fileName, data, (err)=> {
//     if(err) console.log("An error occurred!\n");
//     else console.log('data written')
// });


// write synchronously
// try {
//     fs.writeFileSync(fileName, data + ': sync manner');
//     console.log('data written synchronously!');
// } catch (err) {
//     console.log('error occurred while writing to file')
// }
// ---------------------------------------------------

// Program 1
// fs.readFile(fileName, (err, data) => {
//     if(err) console.log('an error occurred!\n');
//     else {
//         console.log(data, '\n');      // will give op in buffer form
//         console.log(data.toString());       // convert to type String
//     }
// });
// console.log('myProgram ends here');

/**
 * Program 1 Output: 

myProgram ends here
<Buffer 74 68 69 73 20 69 73 20 61 20 66 69 6c 65 2e 20 41 6e 64 20 69 20 61 6d 20 61 70 
70 65 6e 64 69 6e 67 20 6d 6f 72 65 20 64 61 74 61 20 74 6f 20 69 74 ... 1 more byte>    

this is a file. And i am appending more data to it.


> why does it happen so?
Because nodejs is asynchronous, it does not wait for anything.

Nodejs is single threaded. Check how this works! 1
Every request will have one unique request, and it will complete that only.
*/

// Program 2: reading synchronously
// let fileData;
// try {
//     fileData = fs.readFileSync(fileName);
//     console.log(fileData, '\n');
//     console.log(fileData.toString());
// } catch(err) {
//     console.log('Error occurred while reading the file!!')
// }
// console.log('myProgram ends here')



// ------------- Experimenting ---------------------
// fs.writeFile(fileName, data, (err) => {
//     if(err) console.log('an error occurred');
//     else {
//         try {
//             let data = fs.readFileSync(fileName)
//             console.log(data.toString());
//         } catch(err) {
//             console.log('error in reading data');
//         }
//         console.log('data was written');
//     }
// })

// fs.unlink(fileName, (err) => {
//     if(err) console.log('error occurred bro!!');
//     else console.log('deleted the file successfully!')
// });




// fs.appendFile(fileName, 'Appending data', (err) => {
//   if(err) console.log('an error occurred');
//   else console.log('successfully appended');
// });

fs.readFile(fileName, (err, data) => {
  if(err) console.log('an error occurred in reading')
  else console.log(data.toString());
})


/**
 * 
 * More methods:
 
   learn all syntax from nodejs.org

 * readFile, readFileSync
 * writeFile, writeFileSync
 * unlink, unlinkSync
 * rename, renameFileSync
 * appendFile, appendFileSync
 * copyFile, copyFileSync
 * watch, watchFile     [for dir, for file]
 */


