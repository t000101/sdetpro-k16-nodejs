/**
Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 * 
 * Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 * The program need to allow user to input a sentence, not hard code (optional)
 */


const readline = require('readline-sync');

let sentence = giveString();
let  words = sentence.replace(/[().,!]/g, '').split(' ');
countWords(words);

function giveString(){
    return readline.question('Enter a sentence: ');
}

function countWords(words){
    let wordCount = {};
    for (let word of words){
        if (wordCount[word]){
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    console.log(wordCount);

}