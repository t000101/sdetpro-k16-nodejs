const Post = require("./Post");

class RequestHandler {
    constructor() {
        this.BASE_URL = "https://jsonplaceholder.typicode.com/posts";
    }

    async _getAllPosts() {
        try {
            const response = await fetch(this.BASE_URL);
            return await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    async printTargetPost(userId, postId) {
        const posts = await this._getAllPosts();
        const foundPost = posts.find(post => post.userId === userId && post.id === postId);

        if (foundPost) {
            const post = new Post(foundPost.userId, foundPost.id, foundPost.title, foundPost.body);
            post.printPost();
            return post;
        } else {
            console.log("No post found for the given User ID and Post ID.");
            return null;
        }
    }

    async printAllPosts(userId) {
        const posts = await this._getAllPosts();
        const userPosts = posts.filter(post => post.userId === userId);

        if (userPosts.length > 0) {
            return userPosts.map(post => {
                const newPost = new Post(post.userId, post.id, post.title, post.body);
                newPost.printPost();
                return newPost;
            });
        } else {
            console.log("No posts found for the given User ID.");
            return [];
        }
    }
}

module.exports = RequestHandler;
