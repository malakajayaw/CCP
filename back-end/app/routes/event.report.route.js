const express = require('express');
const router = express.Router();

const EventReportController = require('../controllers/event.report.controller')
// add member
router.post('/report/add',  EventReportController.add_report_add);
router.get('/report/all',  EventReportController.get_all_reports);
router.post('/report/delete',  EventReportController.delete_report);
router.post('/report/spec',  EventReportController.get_spec_report_del);



module.exports = router;