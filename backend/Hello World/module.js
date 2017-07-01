console.log('Include module.js');
const fs = require('fs');

let readFile = () => {
  let result = fs.readFileSync('helloworld.txt', 'utf-8');
  console.log(`read file done ${result}`);
}


//let readFile(a) => {

//}

module.exports = {
  readFile
}
