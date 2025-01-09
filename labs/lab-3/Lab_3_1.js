/* 
* Count how many odd, even number(s) in an integer array
* let intArr = [1, 2, 3, 4, 5];
* Even numders: 2
* Odd numbers: 3 
*/

const { isOddNumber } = require('./UtilMethods');

let intArr = [1, 2, 3, 4, 5];
let totalOddNumbers = 0;
let totalEvenNumbers = 0;

for (const number of intArr) {
    if(isOddNumber(number)){
        totalOddNumbers++;
    }else{
        totalEvenNumbers++;
    }
}

console.log(`Even numbers: ${totalEvenNumbers}`);
console.log(`Odd numbers: ${totalOddNumbers}`);

