const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"));
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const bookFilter = books.filter((book) => book.id === id)[0];

  return bookFilter;
}

function insertBook(modernBook) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const modernListBooks = [...books, modernBook];

  fs.writeFileSync("books.json", JSON.stringify(modernListBooks));
}

function modifyBook(modify, id) {
  let books = JSON.parse(fs.readFileSync("books.json"));

  const indexModified = books.findIndex((book) => book.id === id);

  const changedContent = { ...books[indexModified], ...modify };

  books[indexModified] = changedContent;

  fs.writeFileSync("books.json", JSON.stringify(books));
}

function removeBook(id) {
  let books = JSON.parse(fs.readFileSync("books.json"));

  const bookFilter = books.filter((book) => book.id !== id);

  fs.writeFileSync("books.json", JSON.stringify(bookFilter));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  modifyBook,
  removeBook,
};
