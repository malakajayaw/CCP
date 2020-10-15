const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventAttendanceC = new Schema({
    membershipNo: {
        type: String,
      },
      confirmed_status: {
        type: String,
        enum: ['value1', 'value2'],
      },

});

module.exports = mongoose.model("eventattendance", EventAttendanceC);