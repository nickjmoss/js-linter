// run `node index.js` in the terminal
const fs = require('fs');

const text = fs.readFileSync('./test.js', 'utf-8');

const lines = text.split(/\n|\r\n/gm);

console.log(lines);
