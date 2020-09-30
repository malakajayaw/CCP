const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Activity = new Schema({


    EntryNo: {
        type: String,
        required: true,
        unique: true

    },

    memberID: {
        type: String,
        required: true,

    },
    action: {
        type: String,
        required: true,
    },
    table: {
        type: String,
        required: true,
    },
    parameters: {
        type: String,
        required: true,
    },
    datetime: {
        type: String,
        default: Date.now()
    }
});


module.exports = mongoose.model('activity', Activity);