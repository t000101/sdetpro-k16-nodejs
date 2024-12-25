const readLine = require('readline-sync');

let number = Number(readLine.question('Let input a number: '));
let result = number % 2;

if(result === 0){
    console.log('Your number is an Even number');
}else{
    console.log('Your number is an Odd number');
}   