//import User model
const EventReport = require("../model/eventreport.model");

const moment = require('moment')

//======================================================================================================
//================================== Request sent Memeber      =============================================
//======================================================================================================
exports.add_report_add = function (req, res, next) {
  console.log(req.body);

  let newDate = new Date();

  const today = moment(newDate).format("MMM Do YY");
  let new_report = EventReport({
    reportname: req.body.reportname,
    submssionState: req.body.submssionState,
    submissionComment: req.body.submissionComment,
    created_at: today,
  });

  try {
    new_report.save();
    return res.status(200).send("Added");
  } catch (error) {
    throw error;
  }
  return res.status(403).send("Already have");
};
exports.get_all_reports = async function (req, res, next) {
  console.log("Called");
  // check userdata
  const result = await EventReport.find();

  return res.status(200).send({
    data: result,
  });
};

exports.delete_report = async function (req, res, next) {
  var id = req.body.id;

  try {
    const log = await EventReport.findOneAndDelete({
      _id: id,
    });
    return res.status(200).send("Deleted");
  } catch (error) {
    return res.status(405).send("Something went wrong");
  }
};

exports.get_spec_report_del = async function (req, res, next) {
  var id = req.body.id;

  try {
    const log = await EventReport.findOne({
      _id: id,
    });
    return res.status(200).send({
      data: log,
    });
  } catch (error) {
    return res.status(405).send("Something went wrong");
  }
};
