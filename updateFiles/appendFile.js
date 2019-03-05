//Update file content by appending another content. It adds the new content to the old content.

var fs = require('fs');

fs.appendFile('newfile4.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});