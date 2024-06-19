const readline=require('readline');
const fs=require('fs');
let textIn=fs.readFileSync('./files/input.txt', 'utf-8');
console.log(textIn);
let content=`data read form input.txt: ${textIn}. \n date crated ${new Date()}`
let textOut=fs.writeFileSync('./files/output.txt', content)