const fs = require("fs");

function add(title, level) {
  if(!title) {console.log('No title'); return;}
  if(!level) {console.log('No level'); return;}

  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);

    for (let i = 0; i < jsonData.languages.length; i++) {
      let languages = jsonData.languages[i];
      if (languages.title === title) {
        console.log(`"${title}" already exists. Overwriting.`);
        jsonData['languages'][i].level = level;
        break;
      } else {
        console.log(`${title} added.`);
        jsonData['languages'].push({"title": title, "level": level});
        break;
      }}

    fs.writeFile('user.json', JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) throw err;
      // console.log('The file has been saved!');
    });
  });
}

function remove(title) {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);

    for (let i = 0; i < jsonData.languages.length; i++) {
      let languages = jsonData.languages[i];
      if (languages.title == title) {
        console.log(`"${title}" was removed.`);
        jsonData['languages'].splice(i, 1);
        break;
      } else if(languages.title != title && i == jsonData.languages.length-1) {
        console.log(`${title} not found.`);
      }}

    fs.writeFile('user.json', JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) throw err;
      // console.log('The file has been saved!');
    });
  });
}

function list() {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) console.log('cant open file');
    let jsonData = JSON.parse(data);
    for (let i = 0; i < jsonData.languages.length; i++) {
      let languages = jsonData.languages[i];
      console.log(`Language: ${languages.title} -> Level: ${languages.level}`);
    }
  });
}

function read(title) {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) console.log('cant open file');
    let jsonData = JSON.parse(data);
    for (let i = 0; i < jsonData.languages.length; i++) {
      let languages = jsonData.languages[i];
      if (languages.title === title) {
        console.log(`Level of ${title} -> ${languages.level}`);
        return;
      }
    }
    console.log('Not found.');
  });
}

exports.add = add;
exports.remove = remove;
exports.list = list;
exports.read = read;