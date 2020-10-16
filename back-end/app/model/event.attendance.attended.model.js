const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventAttendanceAttended = new Schema({  
  eventId:{
    type: String,
  },
  responder: {
    type: String,
  },
  state: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("EventAttendanceAttended", EventAttendanceAttended);