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

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    let libraryContainer = document.getElementById("library");

    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }

    for (let i = 0; i < library.length; i++) {
        let book = document.createElement("div");
        book.classList.add("book");
        book.setAttribute("data-id", library[i].id);

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

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("book-extra-information-delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteBook);

        let isRead = document.createElement("span");
        isRead.classList.add("book-extra-information-is-read");
        isRead.textContent = library[i].isRead ? "Y" : "N";
        isRead.addEventListener("click", toggleReadStatus);

        extraInformation.appendChild(pages);
        extraInformation.appendChild(deleteButton)
        extraInformation.appendChild(isRead);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(extraInformation);

        libraryContainer.appendChild(book);
    }
}

function createNewBook(e) {
    e.preventDefault();

    let title = document.getElementById("book-form-title").value;
    let author = document.getElementById("book-form-author").value;
    let pages = document.getElementById("book-form-pages").value;
    let isRead =
            document.querySelector("input[name='book-form-read-status']:checked").value === "true"
            ? true
            : false;
    
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(isRead);

    addBookToLibrary(new Book(title, author, pages, isRead));
    displayBooks();
}

function deleteBook(e) {
    let book = e.target.parentElement.parentElement;
    let id = book.getAttribute("data-id");

    for (let i = 0; i < library.length; i++) {
        if (library[i].id == id) {
            library.splice(i, 1);

            break;
        }
    }

    book.parentElement.removeChild(book);
}

function toggleReadStatus(e) {
    let bookID = e.target.parentElement.parentElement.getAttribute("data-id");
    
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == bookID) {
            library[i].isRead = library[i].isRead ? false : true;
            e.target.textContent = library[i].isRead ? "Y" : "N";
        }
    }

}

function addDummyBooks() {
    let book1 = new Book("The Book Thief", "Markus Zusak", 592, true);
    let book2 = new Book("The Northern Lights", "Philip Pullman", 399, false);
    let book3 = new Book("The Girl With The Dragon Tattoo", "Stieg Larsson", 480, false);
    let book4 = new Book("The Wind In The Willows", "Kenneth Grahame", 197, true);
    let book5 = new Book("1984", "George Orwell", 368, false);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    addBookToLibrary(book4);
    addBookToLibrary(book5);

    displayBooks();
}

const library = [];

document.addEventListener("DOMContentLoaded", function(e) {
    addDummyBooks();

    let bookForm = document.getElementById("book-form");
    bookForm.addEventListener("submit", createNewBook);
});
