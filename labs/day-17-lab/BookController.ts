import readlineSync from 'readline-sync';
import Book from './Book';

export default class BookController {

    public static printMenu(): void {
        console.log(`======= Book Management Program (CRUD)============
                    1. New book
                    2. Find a book(ISBN)
                    3. Update a book
                    4. Delete a book
                    5. Print the book list
                    0. Exit`
        );
    }

    public static isValidUserSelection(userSelection: number): void {
        if (userSelection < 0) {
            throw new Error('Your selection is invalid! Close program...')
        }
    }

    public static continueProgram(): number {
        let userSelection = 0;
        const continueProgram = readlineSync.question('Do you want to continue Y/N: ');
        if (continueProgram === 'Y') {
            this.printMenu();
            userSelection = Number(readlineSync.question('Enter your option: '));
        }
        return userSelection;
    }

    public static start(listBook: Book[]): void {
        this.printMenu();
        let userSelection = Number(readlineSync.question('Enter your option: '));

        this.isValidUserSelection(userSelection);

        while (userSelection > 0) {
            switch (userSelection) {
                case 1:
                    listBook = this.newBook(listBook);
                    userSelection = this.continueProgram();
                    break;
                case 2:
                    this.findBook(listBook);
                    userSelection = this.continueProgram();
                    break;
                case 3:
                    listBook = this.updateBook(listBook);
                    userSelection = this.continueProgram();
                    break;
                case 4:
                    listBook = this.deleteBook(listBook);
                    userSelection = this.continueProgram();
                    break;
                case 5:
                    this.printBooksList(listBook);
                    userSelection = this.continueProgram();
                    break;
            }
        }
    }

    public static newBook(listBook: Book[]): Book[] {
        const isbn = readlineSync.question('Please input ISBN: ');
        const title = readlineSync.question('Please input Title: ');
        const author = readlineSync.question('Please input Author: ');
        const publishYear = readlineSync.question('Please input Published Year: ');
        let newBook: Book = new Book(title, isbn, author, publishYear);
        newBook.show();
        listBook.push(newBook);
        return listBook;
    }

    public static findBook(listBook: Book[]): Book {
        const isbn = readlineSync.question('Please input ISBN: ');
        let findBook = listBook.find((book) => book.getIsbn() === isbn);

        if (findBook) {
            findBook.show();
        }
        else {
            throw new Error(`Book with ISBN <${isbn}> is not found`);
        }

        return findBook;
    }

    public static updateBook(listBook: Book[]): Book[] {
        const updateBook = this.findBook(listBook);
        const isbn = readlineSync.question('Please input ISBN: ');
        const title = readlineSync.question('Please input Title: ');
        const author = readlineSync.question('Please input Author: ');
        const publishYear = readlineSync.question('Please input Published Year: ');
        listBook.forEach((book) => {
            if(book.getIsbn() === updateBook.getIsbn()){
                book.setIsbn(isbn).setAuthor(author).setTitle(title).setPublishYear(publishYear);
            }
        });        
        console.log(`The book is now updated with new content: ${updateBook.returnString()}`)
        return listBook;
    }

    public static deleteBook(listBook: Book[]): Book[] {
        const deleteBook = this.findBook(listBook);
        const newListBook: Book[] = listBook.filter((book) => book.getIsbn() != deleteBook.getIsbn());
        console.log(`The book is now deleted with new content: ${deleteBook.returnString()}`)
        return newListBook;
    }

    public static printBooksList(listBook: Book[]): void {
        listBook.forEach((book: Book) => {
            book.show();
        })
    }
}