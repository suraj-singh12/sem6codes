const fs = require('fs');

const currentFilePath = 'path/to/current_file.txt'; // Replace with the path of the file you want to rename
const newFilePath = 'path/to/new_file.txt'; // Replace with the desired new file path

try {
  fs.renameSync(currentFilePath, newFilePath);
  console.log('File renamed successfully!');
} catch (err) {
  console.error('Error renaming file:', err);
}
