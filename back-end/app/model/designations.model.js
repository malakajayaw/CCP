const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Designations = new Schema({

    title: {
        type: String,
        required: true,

    },
    affiliationNo: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    MemNo: {
        type: String,
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