const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook
} = require("./controller/book.controller");
require("dotenv").config();
// const axios = require('axios');
const PORT = process.env.PORT;
const MONGODB_CLINTE = process.env.MONGODB_CLINTE;

mongoose.connect(MONGODB_CLINTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const {seedUserData} = require('./models/user.model');
// seedUserData();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/books", getBooks);
app.post("/book", createBook);
app.delete("/book/:book_idx", deleteBook);
app.put('/book/:book_idx', updateBook);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
