const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Affiliation = new Schema({
    


    affiliationtype: {
        type: String,
        required: true,

    },
    affiliationname: {
        type: String,
        required: true,
    },
    affiliationno: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
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


module.exports = mongoose.model('affiliation', Affiliation);