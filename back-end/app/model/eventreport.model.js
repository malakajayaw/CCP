const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventReport = new Schema({
  // eventId: {
  //     type: Schema.ObjectId,
  //     ref: 'events',

  // },

  eventName: {
     type: String,
     required: true,
   },

  submssionState: {
    type: String,
  },
  reportname: {
    type: String,
  },

  submissionComment: {
    type: String,
  },

  updated_at: {
    type: String,
  },
  created_at: {
    type: String,
   
  },
  file_path: {
    type: String,
  },

});

module.exports = mongoose.model("eventreports", EventReport);
