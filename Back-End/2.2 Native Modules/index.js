const fs = require('node:fs');

const content = 'Some content!';

fs.writeFile('test.txt', "Change in the File" +
    " Wow this is Good", err => {
    if (err) {
        console.error(err);
    } else {
        console.log("File Written Successfully");
    }
});

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

