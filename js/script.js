function Book(title, author, pages, isRead) {
    this.id = self.crypto.randomUUID();
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    library.push(newBook);
}

const library = [];

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM content has loaded");
});
