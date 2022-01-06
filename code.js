// BOOK CLASS
class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}

// UI CLASS
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Harry Potter',
                author: 'J. K Rowling',
                pages: '896'
            },
            {
                title: 'Fight Club',
                author: 'John Van Dude',
                pages: '658'
            },
            {
                title: 'Berserk',
                author: 'Kentaro Miura',
                pages: '1503'
            }
        ]
        const books = storedBooks;

        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }

    static addBookToList(book) {
        const bookListTitle = document.getElementById('title');
        const bookListAuthor = document.getElementById('author');
        const bookListPages = document.getElementById('pages');

        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');

        bookTitle.textContent = `${book.title}`;
        bookAuthor.textContent = `${book.author}`;
        bookPages.textContent = `${book.pages}`;

        bookListTitle.appendChild(bookTitle);
        bookListAuthor.appendChild(bookAuthor);
        bookListPages.appendChild(bookPages);
    }
}

// STORE CLASS

// EVENT: DISPLAY BOOKS
const btnSubmit = document.getElementById('submit-form-btn')
btnSubmit.addEventListener('click', () => {
    console.log('ey')
})

// EVENT: ADD A BOOK

// EVENT: REMOVE A BOOK