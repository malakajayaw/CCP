const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    
    eventId : {
        type : String
    },
    eventName: {
        type: String,
        required: true,
        trim : true
    },
    eventDate: {
        type: Date,
       // type: { $dateToString: { format: "%Y-%m-%d" } }
      //  required: true,
        trim : true
    },
    startTime: {
        type: String,
    //    required: true,
        trim : true
    },
    endTime: {
        type: String,
     //   required: true,
        trim : true
    },
    venue: {
        type: String,
      //  required: true,
        trim : true
    },
    description: {
        type: String,
        trim : true
    },
    hostingAffiliation: {
        type: String,
        trim : true
    },
    volunteers: {
        type: Array,
      //  required: true,
    },
    registrationForm: {
        type: Array,
    },
    fieldNames: {
        type: Array,
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