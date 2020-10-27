const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PastDesignations = new Schema({


    AssNo: {
        type: String,

    },
    title: {
        type: String,
        required: true,

    },
    affiliationNo: {
        type: String,
        required: true,
    },
    MemNo: {
        type: String,
        required: true,
    },
    Year: {
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


module.exports = mongoose.model('PastDesignations', PastDesignations);