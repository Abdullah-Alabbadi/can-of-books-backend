'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./book.model');

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

// Here we are creating a new schema obj, which will be used later on to generate the model
const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

// generate the model based on the schema
const userModel = mongoose.model('users', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: 'abdaullah20000@gmail.com',
        books: [
            { name: 'book1' },
            { name: 'book2' },
            { name: 'book3' }
        ]
    });

    console.log(newUser);

    newUser.save();

}

module.exports = userModel;