//The fs.writeFile() method replaces the specified file and content if it exists. 

var fs = require('fs');

fs.writeFile('newfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});