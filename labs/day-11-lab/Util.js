const readline = require("readline-sync");

function printMenu() {
    console.log(`=== Menu ===
    1. Find a post content when searching by User ID and Post ID
    2. Find all posts for a User ID
    0. Exit the program`);
    return Number(readline.question('Enter your option: '));
}

function getUserId() {
    return Number(readline.question('Enter User ID: '));
}

function getPostId() {
    return Number(readline.question('Enter Post ID: '));
}

module.exports = { printMenu, getUserId, getPostId };
