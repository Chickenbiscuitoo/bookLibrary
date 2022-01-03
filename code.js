let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary)
}

function displayBooks() {
    const divLibrary = document.querySelector('#divLibrary');
    
    for (let i = 0; i < myLibrary.length; i++) {
        let divBook = document.createElement('div');
        divLibrary.appendChild(divBook).className = 'divBook';

        let bookTitle = myLibrary[i].title
        divBook.innerHTML = bookTitle;
    }
}

function showForm() {
    let form = document.getElementById("form");
    if (!form.style.display) {
        form.style.display = "none";
    }
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

document.getElementById('btnSubmit').addEventListener('click', (event) => {
    let inputAuthor = document.getElementById('inputAuthor').value;
    let inputTitle = document.getElementById('inputTitle').value;
    let inputPages = document.getElementById('inputPages').value;
    let inputRead = document.getElementById('inputRead').value;

    addBookToLibrary(inputAuthor, inputTitle, inputPages, inputRead);
    displayBooks();
    event.preventDefault();
});