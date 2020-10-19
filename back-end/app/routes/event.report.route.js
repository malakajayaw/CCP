const express = require('express');
const router = express.Router();

const EventReportController = require('../controllers/event.report.controller')

//adding event report for an event
router.post('/report/add',  EventReportController.add_report_add);

//getting all the reports for all the events
router.get('/report/all',  EventReportController.get_all_reports);

//deleting the reports for an event
router.post('/report/delete',  EventReportController.delete_report);

//getting specific event report detail
router.post('/report/spec',  EventReportController.get_spec_report_del);

//getting the affiliation name by the event id
router.post('/report/getEventName',  EventReportController.get_affiliation_by_event_name);

module.exports = router;