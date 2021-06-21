const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const getBooks = require("./controller/book.controller");
require("dotenv").config();
// const axios = require('axios');
// const seedUserData = require('./models/user.model')
app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});