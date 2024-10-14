const express = require("express");
const routerBooks = require("./routes/books");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/books", routerBooks);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
