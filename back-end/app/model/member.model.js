const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Member = new Schema({


    memberShipNo: {
        type: String,
        required: true,
        unique: true

    },

    fname: {
        type: String,
        required: true,

    },
    lname: {
        type: String,
        required: true,
    },
    nameAsMemberShip: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ieeeMail: {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,

    },
    lastlogin: {
        type: String,

    },
    contactNo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    updated_at: {
        type: String,

    },
    created_at: {
        type: String,
        default: Date.now()
    },
    state: {
        type: Boolean,
        default: false
    },
    newrequest : {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: "member"
    }
});


module.exports = mongoose.model('member', Member);