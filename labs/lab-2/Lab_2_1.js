const readLine = require('readline-sync');

let height = Number(readLine.question('Let input your height (m): '));
let weight = Number(readLine.question('Let input your weight (kg): '));

function isValidNumber(value) {
    return !isNaN(value) && value > 0;
}

if (!isValidNumber(height) || !isValidNumber(weight)) {
    console.log('Invalid input!');
} else {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        let upYourWeightTo = Math.round(24.9 * height * height - weight);
        console.log('Underweight');
        console.log('You should gaining ' + upYourWeightTo + ' kilogram(s) to reach a healthier weight.');
    } else if (bmi < 24.9) {
        console.log('Normal');
        console.log('Your weight is in a healthy range.');
    } else if (bmi < 29.9) {
        let downYourWeightTo =  Math.round(weight - (24.9 * height * height));
        console.log('Overweight');
        console.log('You should consider losing ' + downYourWeightTo + ' kilogram(s) to reach a healthier weight.');
    } else {
        let downYourWeightTo = Math.round(weight - (24.9 * height * height));
        console.log('Obesity');
        console.log('You should consider losing ' + downYourWeightTo + ' kilogram(s) to reach a healthier weight.');
    }
}


