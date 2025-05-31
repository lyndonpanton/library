function Book(title, author, pages, isRead) {
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    library.push(newBook);
}

function displayBooks() {
    let libraryContainer = document.getElementById("library");

    for (let i = 0; i < library.length; i++) {
        let book = document.createElement("div");
        book.classList.add("book");

        let title = document.createElement("p");
        title.classList.add("book-title");
        title.textContent = library[i].title;

        let author = document.createElement("p");
        author.classList.add("book-author");
        author.textContent = library[i].author;

        let extraInformation = document.createElement("div");
        extraInformation.classList.add("book-extra-information");

        let pages = document.createElement("span");
        pages.classList.add("book-extra-information-pages");
        pages.textContent = library[i].pages;

        let isRead = document.createElement("span");
        isRead.classList.add("book-extra-information-is-read");
        isRead.textContent = library[i].isRead ? "Y" : "N";

        extraInformation.appendChild(pages);
        extraInformation.appendChild(isRead);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(extraInformation);

        libraryContainer.appendChild(book);
    }
}

const library = [];

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM content has loaded");
});
