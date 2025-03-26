# Skeleton

## Execution
```javascript
// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object

    // const post = ...
    // const allPost = ...
}
```

## Model(s)

```javascript
// Post.js
class Post {
}
module.exports = Post;
```

## Controller (Data Model Processor)

> NOTE: This is a variant of controller where it is not procesing the Post model but returns the Model

```javascript
// RequestHandler.js
class RequestHandler {

    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
    }

    async _getAllPosts(userId) {
    }
}
module.exports = RequestHandler;
```