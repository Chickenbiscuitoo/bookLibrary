class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}

class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }

    static addBookToList(book) {
        const libraryBookshelf = document.getElementById('library-bookshelf');
        
        const row = document.createElement('div');
        row.className = 'library-row';
        row.id = 'library-row';

        const rowTitleDiv = document.createElement('div');
        const rowAuthorDiv = document.createElement('div');
        const rowPagesDiv = document.createElement('div');
        const rowDeleteBtnDiv = document.createElement('div');

        rowTitleDiv.id = 'title';
        rowAuthorDiv.id = 'author';
        rowPagesDiv.id = 'pages';
        rowDeleteBtnDiv.id = 'delete-btn-div'

        rowTitleDiv.className = 'row-element';
        rowAuthorDiv.className = 'row-element';
        rowPagesDiv.className = 'row-element';
        rowDeleteBtnDiv.className = 'row-element'

        rowTitleDiv.innerHTML = `<p>${book.title}</p>`;
        rowAuthorDiv.innerHTML = `<p>${book.author}</p>`;
        rowPagesDiv.innerHTML = `<p>${book.pages}</p>`;
        rowDeleteBtnDiv.innerHTML = '<button class="delete-btn" >X</button>';

        row.appendChild(rowTitleDiv);
        row.appendChild(rowAuthorDiv);
        row.appendChild(rowPagesDiv);
        row.appendChild(rowDeleteBtnDiv);

        libraryBookshelf.appendChild(row);
    }

    static clearForm() {
        document.getElementById('input-title').value = '';
        document.getElementById('input-author').value = '';
        document.getElementById('input-pages').value = '';
    }

    static deleteBook(target) {
        if (target.classList.contains('delete-btn')) {
            target.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(title) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.title === title) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// EVENT: ADD A BOOK
const btnSubmit = document.getElementById('submit-form-btn')
btnSubmit.addEventListener('click', (e) => {
    if (
        !document.getElementById('input-title').value == '' && 
        !document.getElementById('input-author').value == '' &&
        !document.getElementById('input-pages').value == ''
    ) {
        title = document.getElementById('input-title').value;
        author = document.getElementById('input-author').value;
        pages = document.getElementById('input-pages').value;
        
        const book = new Book(title, author, pages);

        UI.addBookToList(book);

        Store.addBook(book);

        UI.clearForm();

        e.preventDefault();
    }
})

// EVENT: REMOVE A BOOK
document.getElementById('library-bookshelf').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
})