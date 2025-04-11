export default class Book {
    private title: string;
    private isbn: string;
    private author: string;
    private publishYear: string;

    constructor (title: string, isbn: string, author: string, publishYear: string) {
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.publishYear = publishYear;
    }
    
    public setTitle(title: string){
        this.title = title;
        return this;
    }

    public setIsbn(isbn: string){
        this.isbn = isbn;
        return this;
    }

    public setAuthor(author: string){
        this.author = author;
        return this;
    }

    public setPublishYear(publishYear: string){
        this.publishYear = publishYear;
        return this;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    show(): void {
        console.log(`[Book: ${this.title}] - Author: ${this.author} - ISBN: ${this.isbn} - Year: ${this.publishYear}`);
    }

    returnString(): string {
        return `Book {ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.publishYear}}`
    }

}