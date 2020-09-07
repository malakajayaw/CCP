const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventReport = new Schema({
  // eventId: {
  //     type: Schema.ObjectId,
  //     ref: 'events',

  // },

  reportname: {
    type: String,
    required: true,
  },

  submssionState: {
    type: String,
    required: true,
  },

  submissionComment: {
    type: String,
    required: true,
  },

  updated_at: {
    type: String,
  },
  created_at: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("member", EventReport);
