const readLine = require('readline-sync');

let height = Number(readLine.question('Let input your height: '));
let weight = Number(readLine.question('Let input your weight: '));
let bmi = weight / (height * height);

if(bmi < 18.5){
    console.log('Underweight');
    console.log('You should consider gaining some weight.');
}else if(bmi >= 18.5 && bmi < 24.9){
    console.log('Normal');
    console.log('Your weight is in a healthy range.');
}else if(bmi >= 25 && bmi < 29.9){
    console.log('Overweight');
    console.log('You should consider losing some weight.');
}else{
    console.log('Obesity');
    console.log('You should consider losing some weight.');
}