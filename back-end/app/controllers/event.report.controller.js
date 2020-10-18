//import Event Report model
const EventReport = require("../model/eventreport.model");
const moment = require("moment");

exports.add_report_add = async function (req, res, next) {
  let newDate = new Date();

  let PdfFile = null;
  try {
    PdfFile = req.files.pdf;
  } catch (err) {
    return res.status(404).send("Please upload the PDF");
  }

  const pdfName = "REPORT_" + req.body.eventname + "_" + Date.now() + ".pdf";
  const uploadFileURL = "http://localhost:5000/assets/reports/" + pdfName;

  await PdfFile.mv("./app/public/reports/" + pdfName, (err, result) => {
    if (err) return res.status(400).send("Failed to upload PDF!");
  });

  await PdfFile.mv("./app/public/reports/" + pdfName, (err, result) => {
    if (err) return res.status(400).send("Failed to upload PDF!");
  });

  const today = moment(newDate).format("MMM Do Y Y");

  let new_report = EventReport({
    eventName: req.body.eventname,
    reportname: req.body.reportname,
    submssionState: req.body.submssionState,
    submissionComment: req.body.submissionComment,
    created_at: today,
    file_path: uploadFileURL,
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
  //console.log("Called");
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
