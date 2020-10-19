const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Admin = new Schema({


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

    email: {
        type: String,
        required: true,
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

    type: {
        type: String,
        default: "admin"
    }
});


module.exports = mongoose.model('admin', Admin);