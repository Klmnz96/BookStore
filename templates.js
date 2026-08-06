function getBookCardTemplate(book) {
  return `<article class="book-card">
    <div class="book-card-section">
    <h2 class="book-title">${book.name}</h2>
    <hr class="divider">
    
    <div class="book-card-section book-card-cover">
    <img src="./assets/img/book-img.png" alt="Book Image">
    </div>
    <hr class="divider">
    
    <div class="book-card-section book-card-meta">
    <div class="price-row">
    <span class="price">${book.price}</span>
    <span class="likes">
    <span class="likes-count">${book.likes}</span>
    <span class="heart-icon">♡</span>
    </span>
    </div>
    
    <dl class="book-details">
    <div class="detail-row">
    <dt>Author</dt>
    <dd class="author">${book.author}</dd>
    </div>
    <div class="detail-row">
    <dt>Erscheinungsjahr</dt>
    <dd class="published-year">${book.publishedYear}</dd>
    </div>
    <div class="detail-row">
    <dt>Genre</dt>
    <dd class="genre">${book.genre}</dd>
    </div>
    </dl>
    </div>
    <hr class="divider">
    
    <div class="book-card-section book-card-comments">
    <h3>Kommentare:</h3>
    <ul class="comment-list">
    
    <li class="comment-item">
    <span class="comment-author">${book.comments[0].name}</span>:
    <span class="comment-text">${book.comments[0].comment}</span>
    </li>
    </ul>
    
    <form class="comment-form">
    <input type="text" class="comment-input" placeholder="Schreibe dein Kommentar ...">
    <button type="submit" class="comment-submit" aria-label="Kommentar senden">&#10148;</button>
    </form>
    </div>
    </article>`;
}
