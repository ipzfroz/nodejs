const fs = require('fs');

let filename = 'task02.txt';
let text = '\nHello world!';

fs.writeFile(`./${filename}`, text, { flag: 'a' }, (err) => { });