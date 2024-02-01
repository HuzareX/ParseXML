
const fs = require('fs')

fs.writeFile('../JSON files/test.json', '', function(err) {
    if(err) {
    return console.log(err);
    }
    console.log("The file was saved!");
    });
    