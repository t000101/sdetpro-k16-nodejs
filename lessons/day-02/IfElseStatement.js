const readLine = require('readline-sync');

let arrivalTime = readLine.question('Arrival Time: ');
let isHeOnTime = (Number(arrivalTime) === 7);

//>, <, >=, <=, ==, ===, !=, !==
// !: to revert a boolean value

if (isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write a letter...");
}

if (!isHeOnTime) {
    console.log("Write a letter...");
}
else {
    console.log("Let's talk!");
}

//Ternary operator: Toán tử 3 ngôi
let msg = isHeOnTime ? "Let's talk!" : "Write a letter...";
console.log(msg);