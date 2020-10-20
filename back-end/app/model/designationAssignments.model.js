const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Assignments = new Schema({


    AssNo: {
        type: String,
        required: true,
        unique: true

    },

    DesNo: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true,
    },
    MemNo: {
        type: String,
        required: true,

    },
    forYear: {
        type: String,
        required: true,
    },
    AssBy: {
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


module.exports = mongoose.model('assignments', Assignments);