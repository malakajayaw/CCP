const express = require('express');
const router = express.Router();

const EventAttendanceController = require('../controllers/event.report.controller')
// add member
router.post('/attendance/reg_members',  EventAttendanceController.get_all_registered_members);
router.post('/attendance/confirm_members',  EventAttendanceController.get_all_confirmed_members);
router.post('/attendance/attended_members',  EventAttendanceController.get_all_attended_members);

module.exports = router;