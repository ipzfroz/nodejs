const fs = require('fs');
const os = require('os');

let filename = 'task03.txt';
let text = `\nHello, ${os.userInfo().username}`;

fs.writeFile(`./${filename}`, text, {flag: 'a'}, (err) => {});