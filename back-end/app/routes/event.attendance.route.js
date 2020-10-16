const express = require('express');
const router = express.Router();

const EventAttendanceConfirmedController = require('../controllers/event.attendanceConfirmed.controller')
const EventAttendanceAttendedController = require('../controllers/event.attendanceAttended.controller')

router.post('/attendance/add_confirmed_mem',  EventAttendanceConfirmedController.addEventAttendanceConfirmed);
router.post('/attendance/get_confirm_mem',  EventAttendanceConfirmedController.getConfirmedMembersForAnEvent);
router.post('/attendance/delete_confirmed_mem',  EventAttendanceConfirmedController.deleteConfirmedMemebr);

router.post('/attendance/add_attended_mem',  EventAttendanceAttendedController.addEventAttendanceAttended);
router.post('/attendance/get_attended_mem',  EventAttendanceAttendedController.getAttendedMembersForAnEvent);
router.post('/attendance/delete_attended_mem',  EventAttendanceAttendedController.deleteAttendedMemebr);

router.post('/attendance/delete_reg_mem',  EventAttendanceConfirmedController.deleteRegisteredMemebr);
module.exports = router;