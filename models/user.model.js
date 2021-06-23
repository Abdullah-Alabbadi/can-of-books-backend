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
            {
                name: 'Living in the Light: A guide to personal transformation',
                description: 'Living in the Light: A Guide to Personal and Planetary Transformation is just that, but so much more. This is self-help for those who have real There comes a time for many when their self-help journey inevitably takes on a spiritual connotation given the extent to how deep their attempts to become the best version of themself go.',
                state: 'test'
            },
            {
                name: 'The Choice: Embrace the Possible',
                description: 'Its 1944 and sixteen-year-old ballerina and gymnast Edith Eger is sent to Auschwitz. Separated from her parents on arrival, she endures unimaginable experiences, including being made to dance for the infamous Josef Mengele. When the camp is finally liberated, she is pulled from a pile of bodies, barely alive.',
                state: 'test'
            }
        ]
    });


    newUser.save();

}

module.exports = {
    userModel,
    seedUserData

};