//Add or append content into a file. If the file does not exist a new one will be created.

var fs = require('fs');

fs.appendFile('newfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});