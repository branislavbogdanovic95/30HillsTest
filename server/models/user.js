"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const GENDERS = ["male", "female"];

var userSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: {
        first: { type: String, required: true, trim: true },
        last: { type: String, default: '' }
    },
    age: { type: Number, required: true },
    gender: { type: String, enum: GENDERS },
    friends: [Number],
    friendsObj: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }]
});

var User = mongoose.model('User', userSchema, 'user');
module.exports = User;