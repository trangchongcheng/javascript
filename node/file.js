var fs = require('fs');

var content = fs.readFileSync('./text/helo.txt',{encoding:'utf8'});
console.log(content);

fs.appendFileSync('./text/helo.txt','Tôi là một developer',{encoding:'utf8'});
console.log(content);