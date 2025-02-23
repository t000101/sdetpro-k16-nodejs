class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    printPost() {
        console.log(`Post ID: ${this.id}\nTitle: ${this.title}\nContent: ${this.body}\n`);
    }
}

module.exports = Post;