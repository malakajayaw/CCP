const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventAttendance = new Schema({
    membershipNo: {
        type: String,
      },
      attendance_status: {
        type: String,
        enum: ['value1', 'value2'],
      },

});

module.exports = mongoose.model("eventattendance", EventAttendance);