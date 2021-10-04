// [1] Create Directory 
var fs = require("fs")

fs.mkdir("./sunil", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})

// [2] Remove Directory 
//var fs = require('fs');

// directory path
var dir = 'temp';

// delete directory recursively
fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});
// [3] Write File 
//var fs = require('fs');

fs.writeFile('test.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// [4] Read File 
//var fs = require('fs')

fs.readFile('/Users/sunil/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// [5] Delete File
//var fs = require('fs');

fs.unlink('test.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// [6] Append data to file
//var fs = require('fs');

fs.appendFile('test.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// [7] Update/Replace file with new data
//var fs = require('fs');

fs.writeFile('test.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

// [8] Rename File
//var fs = require('fs');

fs.rename('test.txt', 'renametest.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
