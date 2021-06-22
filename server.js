const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const {
  getBooks,
  createBook,
  deleteBook
} = require("./controller/book.controller");
require("dotenv").config();
// const axios = require('axios');
// const {seedUserData} = require('./models/user.model')
const PORT = process.env.PORT;
mongoose.connect("mongodb://localhost:27017/myFavoritebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// seedUserData();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/books", getBooks);
app.post('/book', createBook);
app.delete('/book/:book_idx', deleteBook)
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
