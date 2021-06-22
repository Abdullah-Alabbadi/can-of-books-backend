"use strict";

const { userModel } = require("../models/user.model");

const getBooks = (request, response) => {
  const { email } = request.query;

  userModel.find({ email: email }, (error, user) => {
    if (error) {
      response.send(error);
    } else {
      console.log(user);
      response.json(user);
    }
  });
};

const createBook = (request, response) => {
  // we need to get the email of the person and the cat name to add to that person

  // console.log(request.body);
  const { userEmail, bookName, bookDescription, bookState } = request.body;

  userModel.find({ email: userEmail }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      // console.log(userData[0].books);
      userData[0].books.push({
        name: bookName,
        description: bookDescription,
        state: bookState,
      });
      userData[0].save();
      response.json(userData);
    }
  });
};

const deleteBook = (request, response) => {
  // console.log(request.params);
  const bookIndex = request.params.book_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      // console.log('000000000000000000000000');
      // console.log(userData);
      userData.books.splice(bookIndex, 1);
      userData.save();
      response.send(userData);
    }
  });
};

module.exports = {
  getBooks,
  createBook,
  deleteBook,
};
