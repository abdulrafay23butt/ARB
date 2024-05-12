// usermodel.js
const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    Fullname: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    Username: {
        type: String,
        required: true,
        unique: true,
    },
    Email: { // corrected field name from mail to Email
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userschema);

module.exports = User;
