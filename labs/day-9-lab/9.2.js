/**
 * General info:
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
9.1
Please using PROMISE and thenable to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
9.2
Please using PROMISE and ASYNC/AWAIT to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user 
 */

const readline = require('readline-sync');
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function getAPost(userId, postId) {
    try {
      const response = await fetch(BASE_URL);
      const posts = await response.json();
      const result = posts.find(post => post.userId === userId && post.id === postId);
      if (result) {
        console.log("Post Found:", result.body);
      } else {
        console.log("No post found for the given User ID and Post ID.");
      }
    } catch (error) {
      console.log("Error fetching post. Please check your internet connection and try again.");
    }
  }
  
  async function getAllPosts(userId) {
    try {
      const response = await fetch(BASE_URL);
      const posts = await response.json();
      const result = posts.filter(post => post.userId === userId);
      if (result.length > 0) {
        console.log("Posts:");
        result.forEach(post => console.log(`- ${post.title}`));
      } else {
        console.log("No posts found for the given User ID.");
      }
    } catch (error) {
      console.log("Error fetching posts. Please check your input and try again.");
    }
  }

function printMenu() {
    console.log(`=== Menu ===
    1. Find a post content when searching by User ID and Post ID
    2. Find all posts for a User ID
    0. Exit the program`);
    return Number(readline.question('Enter your option: '));
}

function getUserId(){
    return Number(readline.question('Enter User ID: '));
}

function getPostId(){
    return Number(readline.question('Enter Post ID: '));
}


async function main() {
    while (true) {
      const option = printMenu();
      switch (option) {
        case 1:
          const userId = getUserId();
          const postId = getPostId();
          if (!isNaN(userId) && !isNaN(postId)) {
            await getAPost(userId, postId);
          } else {
            console.log("Invalid input. Please enter numbers only.");
          }
          break;
        case 2:
          const allUserId = getUserId();
          if (!isNaN(allUserId)) {
            await getAllPosts(allUserId);
          } else {
            console.log("Invalid input. Please enter a number.");
          }
          break;
        case 0:
          console.log("Exiting program...");
          return; // Thoát khỏi vòng lặp
        default:
          console.log("Invalid option. Please try again.");
      }
    }
  }

main();
