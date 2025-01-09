/* 
* Sort an integer array from min to max
* Input: [12, 34, 1, 16, 28]
* Expected output: [1, 12, 16, 28, 34]
*/

let myArray = [12, 34, 1, 16, 28];

for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
        if (myArray[j] < myArray[i]) {
            let tempNum = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = tempNum;
        }
    }
}

console.log(myArray);