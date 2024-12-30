/**
 * <18: Khong ban!
 * 18 -> 55: Unlimited!
 * 56 ->: 2 chai.
 */

const readLine = require('readline-sync');
let clientAge = Number(readLine.question('Your Age: '));

/**
 * redudant logic: clientAge >= 18 && clientAge <= 55
 */
if (clientAge < 18) {
    console.log('Khong ban!');
} else if (clientAge >= 18 && clientAge <= 55) {
    console.log('Unlimited!');
} else {
    console.log('2 chai.');
}