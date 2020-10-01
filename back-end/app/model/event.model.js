const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date
       // type: { $dateToString: { format: "%Y-%m-%d" } }
      //  required: true,
    },
    startTime: {
        type: String,
    //    required: true,
    },
    endTime: {
        type: String,
     //   required: true,
    },
    venue: {
        type: String,
      //  required: true,
    },
    description: {
        type: String,

    },
    hostingAffiliation: {
        type: String,
    },
    volunteers: {
        type: Array,
      //  required: true,
    },
    formLink: {
        type: String,
    },
    banner: {
        type:String
    },
    created_at: {
        type: String,
        default: Date.now()
    },
    updated_at: {
        type: String,
    }
});


module.exports = mongoose.model('event', Event);