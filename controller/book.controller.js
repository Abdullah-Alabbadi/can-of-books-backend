"use strict";

const { userModel } = require("../models/user.model");

const getBooks = (request, response) => {
  const { email } = request.query;

  userModel.find({ email: email }, (error, user) => {
    if (error) {
      response.send(error);
    } else {
      response.json(user);
    }
  });
};

const createBook = (request, response) => {
  // we need to get the email of the person and the cat name to add to that person

  const { userEmail, bookName, bookDescription, bookState } = request.body;

  userModel.find({ email: userEmail }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
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
  const bookIndex = request.params.book_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.books.splice(bookIndex, 1);
      userData.save();
      response.send(userData);
    }
  });
};

const updateBook = (request, response) => {
  const bookIndex = request.params.book_idx;
  // const { userEmail, bookName } = request.body;
  const { userEmail, bookName, bookDescription, bookState } = request.body;
  userModel.findOne({ email: userEmail }, (error, userData) => {
      if (error) {
          response.send(error)
      } else {
          userData.books.splice(bookIndex, 1, {
            name: bookName,
            description: bookDescription,
            state: bookState,
          });
          userData.save();
          response.send(userData)
      }

  });
}


module.exports = {
  getBooks,
  createBook,
  deleteBook,
  updateBook
};
