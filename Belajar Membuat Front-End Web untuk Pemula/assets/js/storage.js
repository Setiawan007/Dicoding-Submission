const books = [];
const STORAGE_KEY = "DATA_BOOK";
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";

function isStorageExist() {
    if (typeof Storage === undefined) {
        alert("Browser does not support local storage");
        return false;
    }
    return true;
}

function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function updateDataFromStorage() {
    if (isStorageExist()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function findBook(bookId) {
    for (const book of books) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}

function findBookIndex(bookId) {
    let index = 0;
    for (const book of books) {
        if (book.id === bookId) return index;
        index++;
    }
    return -1;
}