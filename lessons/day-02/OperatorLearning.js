let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and left operand
let result = myNum1 + myNum2;
console.log('Total: ', result);
console.log('Total: ' +  result);

//String template/literal (`:)
//[`]: backstick
console.log(`Total: ${result}`);

result = 5/2;
console.log(`5/2: ${result}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

//Rounding
let rounndingNearest = Math.round(9 / 2);
console.log(`rounndingNearest : ${rounndingNearest}`);

let roundingFLoor = Math.floor(9 / 2);
console.log(`roundingFLoor : ${roundingFLoor}`);

let roundingCeil = Math.ceil(9 / 2);
console.log(`roundingCeil : ${roundingCeil}`);

result = 10 / 3;
let toFixedNumber = result.toFixed(3);

