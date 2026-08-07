function renderBooks(index) {
  let contentRef = document.getElementById("book-grid");
  contentRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    const book = books[indexBook];
    contentRef.innerHTML += getBookCardTemplate(book, indexBook);
  }
}

function init() {
  getFromLocalStorage();
  renderBooks();
}

function toggleLike(index) {
  let book = books[index];
  let heartIcon = document.querySelectorAll(".heart-icon")[index];
  let likesCount = document.querySelectorAll(".likes-count")[index];

  if (book.liked) {
    book.liked = false;
    book.likes -= 1;
    heartIcon.textContent = "♡";
    likesCount.textContent = book.likes;
  } else {
    book.liked = true;
    book.likes += 1;
    heartIcon.textContent = "♥";
    likesCount.textContent = book.likes;
  }

  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let savedBooks = JSON.parse(localStorage.getItem("books"));

  if (savedBooks) {
    books = savedBooks;
  }
}
