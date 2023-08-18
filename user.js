const mongoose = require('mongoose');
const { Schema } = mongoose;
const utils = require("./utils");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true,
        enum: utils?.categoryList
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, "no should have minimum 10 digits"],
        maxLength: [10, "no should have maximum 10 digits"],
        match: [/\d{10}/, "no should only have digits"]
    },
    invitationDone: {
        type: Boolean,
        default: false
    },
    alias: {
        type: String,
        required: false
    },
    daysLeft: { type: Number, default: 3 },
});



mongoose.model('User', userSchema);