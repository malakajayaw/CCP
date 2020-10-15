const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Designations = new Schema({


    DesNo: {
        type: String,
        required: true,
        unique: true

    },

    title: {
        type: String,
        required: true,

    },
    affiliationNo: {
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
        default: true
    },
});


module.exports = mongoose.model('designations', Designations);