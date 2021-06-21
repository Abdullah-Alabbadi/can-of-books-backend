const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const getBooks = require("./controller/book.controller");
// const axios = require('axios');
const seedUserData = require('./models/user.model')
require("dotenv").config();
app.use(cors());
const port = process.env.PORT;
mongoose.connect("mongodb://localhost:27017/myFavoritebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

seedUserData();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/books", getBooks);

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
