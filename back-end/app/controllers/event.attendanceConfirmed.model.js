const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let event_confirm = new Schema({
    member_id: {
        type: String,
        required: true,
    },
    confirmequest : {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('event_confirm', event_confirm);