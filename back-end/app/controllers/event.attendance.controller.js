//import Event Attendance model
const Event = require('../model/event.attendance.model');

exports.get_all_registered_members = function (req, res, next) {
    Event.find( function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

exports.get_all_attended_members = function (req, res, next) {
    Event.find( function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

exports.get_all_confirmed_members = function (req, res, next) {
    Event.find( function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

exports.add_confimed = function (req, res, next) {
    console.log(req.body);
  
    let newDate = new Date();
  
    const today = moment(newDate).format("MMM Do Y Y");
    let new_attendance = EventAttendancw({
      membershipNo: a,
      time: b,
      confirmed_status: c,
    });
  
    try {
      new_report.save();
      return res.status(200).send("Added");
    } catch (error) {
      throw error;
    }
    return res.status(403).send("Already have");
  };

  exports.add_attended = function (req, res, next) {
    console.log(req.body);
  
    let newDate = new Date();
  
    const today = moment(newDate).format("MMM Do Y Y");
    let new_attendance = EventAttendance({
      membershipNo: a,
      time: b,
      confirmed_status: c,
    });
  
    try {
      new_report.save();
      return res.status(200).send("Added");
    } catch (error) {
      throw error;
    }
    return res.status(403).send("Already have");
  };

  exports.get_spec_attendance_del = async function (req, res, next) {
    var id = req.body.id;
  
    try {
      const log = await EventAttendance.findOne({
        _id: id,
      });
      return res.status(200).send({
        data: log,
      });
    } catch (error) {
      return res.status(405).send("Something went wrong");
    }
  };

  exports.get_spec_confirmed_del = async function (req, res, next) {
    var id = req.body.id;
  
    try {
      const log = await EventAttendance.findOne({
        _id: id,
      });
      return res.status(200).send({
        data: log,
      });
    } catch (error) {
      return res.status(405).send("Something went wrong");
    }
  };
  