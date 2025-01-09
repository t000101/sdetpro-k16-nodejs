/* 
* Finding maximum value/minimum value from an integer array
* let intArr = [1, 2, 3, 4, 5];
* Minimum: 1
* Maximum: 5
*/

let intArr = [1, 2, 3, 4, 5];

let min = intArr[0];
let max = intArr[0];

for (const number of intArr) {
    if(number < min){
        min = number;
    }

    if(number > max){
        max = number;
    }
}

console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);


