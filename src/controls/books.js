const fs = require("fs");
const {
  getAllBooks,
  getBookById,
  insertBook,
  modifyBook,
  removeBook,
} = require("../services/books");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const modernBook = req.body;

    if (req.body.nome && req.body.id) {
      insertBook(modernBook);
      res.send("Book posted sucessfully");
    } else {
      res.status(422)
      res.send("The name's or id input is required")
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      modifyBook(body, id);
      res.send("Book modified sucessfully");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      removeBook(id);
      res.send("book deleted sucessfully");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
