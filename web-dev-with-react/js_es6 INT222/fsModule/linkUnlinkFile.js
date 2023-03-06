const fs = require('fs');

// try {
//     fs.writeFileSync('myFile.txt', 'sample data');
//     console.log('file 1 created');
// } catch(err) {
//     console.log('error in file 1 creation')
// }

// try {
//     fs.writeFileSync('newFile.txt', 'sample data');
//     console.log('file 2 created')
// } catch(err) {
//     console.log('error in file 2 creation')
// }


// Unlink : used to delete files

// fs.unlink('myFile.txt', (err) => {
//     if(err) console.log('error occurred while deleting');
//     else console.log('file 1 deleted successfully');
// })

// try {
//     fs.unlinkSync('newFile.txt');
//     console.log('file 2 deleted successfully')
// } catch(err) {
//     console.log('error occurred while deleting')
// }




// Link: Used to create a hard link (new file, pointing to the original, any change made in one, will be reflected in other too)
fs.link('myFile.txt', 'myFileLink.txt', (err) => {
    if(err) console.log('error in creating link 1');
    else console.log('myFileLink.txt' + ' <--> ' + 'myFile.txt');
});

try {
    fs.linkSync('myFile.txt', 'myFileSyncLink.txt');
    console.log('myFile.txt <--> myFileSyncLink.txt');
} catch(err) {
    console.log('error in creating this link 2');
}