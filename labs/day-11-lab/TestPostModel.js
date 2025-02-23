const RequestHandler = require("./RequestHandler");
const { printMenu, getUserId, getPostId } = require("./Util.js");

async function lab11() {
    const handler = new RequestHandler();
    let option;

    do {
        option = printMenu();
        switch (option) {
            case 1:
                const userId = getUserId();
                const postId = getPostId();
                if (!isNaN(userId) && !isNaN(postId)) {
                    await handler.printTargetPost(userId, postId);
                } else {
                    console.log("Invalid input. Please enter numbers only.");
                }
                break;
            case 2:
                const allUserId = getUserId();
                if (!isNaN(allUserId)) {
                    await handler.printAllPosts(allUserId);
                } else {
                    console.log("Invalid input. Please enter a number.");
                }
                break;
            case 0:
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    } while (option !== 0);
}

lab11();
