import Book from "./Book";
import BookController from "./BookController";

let listBook: Book[] = [
    new Book("Cuon theo chieu gio", "1234", "Teo", "2022"),
    new Book("Tieng chim hot trong bui man gai", "12345", "Ti", "2021")
];

BookController.start(listBook);
