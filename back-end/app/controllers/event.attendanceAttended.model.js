const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let event_attend = new Schema({
    member_id: {
        type: String,
        required: true,
    }

});


module.exports = mongoose.model('event_attend', event_attend);