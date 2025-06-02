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

        let pages = document.createElement("p");
        pages.classList.add("book-pages");
        pages.textContent = library[i].pages + " pages";

        let deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", "./icon/book-delete.svg");
        deleteIcon.setAttribute("alt", "A trash can icon");
        deleteIcon.classList.add("book-delete");
        deleteIcon.addEventListener("click", deleteBook);

        let isReadIcon = document.createElement("img");

        if (library[i].isRead) {
            isReadIcon.setAttribute("src", "./icon/book-complete.svg");
            isReadIcon.setAttribute("alt", "Finished book icon");
            
            book.classList.add("book-is-read-true");
        } else {
            isReadIcon.setAttribute("src", "./icon/book-reading.svg");
            isReadIcon.setAttribute("alt", "Currently reading book icon");
            
            book.classList.add("book-is-read-false");
        }

        isReadIcon.classList.add("book-is-read");
        isReadIcon.addEventListener("click", toggleReadStatus);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(isReadIcon);
        book.appendChild(deleteIcon);

        libraryContainer.appendChild(book);
    }
}

function createNewBook(e) {
    e.preventDefault();

    let title = document.getElementById("book-form-title");
    let author = document.getElementById("book-form-author");
    let pages = document.getElementById("book-form-pages");
    let isRead =
            document.querySelector("input[name='book-form-read-status']:checked").value === "true"
            ? true
            : false;

    if (title.value.trim() !== "" && author.value.trim() !== "" && pages.value.trim() !== "") {
        addBookToLibrary(new Book(title.value, author.value, pages.value, isRead));
        clearDialog([title, author, pages]);
        displayBooks();
        closeDialog();
    }
}

function deleteBook(e) {
    let book = e.target.parentElement;
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
    let bookID = e.target.parentElement.getAttribute("data-id");
    
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == bookID) {
            library[i].isRead = library[i].isRead ? false : true;

            if (library[i].isRead) {
                e.target.setAttribute("src", "./icon/book-complete.svg");
                e.target.setAttribute("alt", "Finished book icon");
                
                e.target.parentElement.classList.add("book-is-read-true");
                e.target.parentElement.classList.remove("book-is-read-false");
            } else {
                e.target.setAttribute("src", "./icon/book-reading.svg");
                e.target.setAttribute("alt", "Currently reading book icon");
                
                e.target.parentElement.classList.add("book-is-read-false");
                e.target.parentElement.classList.remove("book-is-read-true");
            }
        }
    }

}

function clearDialog(formElements) {
    for (let i = 0; i < formElements.length; i++) {
        if ("value" in formElements[i]) {
            formElements[i].value = "";
            formElements[i].value = "";
            formElements[i].value = "";
        }
    }
}

function closeDialog() {
    let bookDialog = document.getElementById("book-dialog");
    bookDialog.close();
}

function openDialog() {
    let bookDialog = document.getElementById("book-dialog");
    // bookDialog.setAttribute("open", true);
    bookDialog.showModal();
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
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);
    addBookToLibrary(book5);

    displayBooks();
}

const library = [];

document.addEventListener("DOMContentLoaded", function(e) {
    addDummyBooks();

    let bookForm = document.getElementById("book-form");
    bookForm.addEventListener("submit", createNewBook);

    let closeDialogButton = document.getElementById("book-form-button-close");
    closeDialogButton.addEventListener("click", closeDialog);

    let openDialogButton = document.getElementById("book-dialog-open-button");
    openDialogButton.addEventListener("click", openDialog);
});
