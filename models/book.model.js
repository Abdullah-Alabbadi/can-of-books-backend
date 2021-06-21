"use strict";

const mongoose = require("mongoose");

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

// Here we are creating a new schema obj, which will be used later on to generate the model
const bookSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  url: { type: String },
});

module.exports = bookSchema;
