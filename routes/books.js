const { Router } = require("express");
const {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
} = require("../controls/books");

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", postBook);

router.delete("/:id", deleteBook);

router.patch("/:id", patchBook);

module.exports = router;
