const express = require('express');
const router = express.Router();

const EventAttendanceConfirmedController = require('../controllers/event.attendanceConfirmed.controller')
const EventAttendanceAttendedController = require('../controllers/event.attendanceAttended.controller')

//adding confirmed member for an event
router.post('/attendance/add_confirmed_mem',  EventAttendanceConfirmedController.addEventAttendanceConfirmed);

//getting confirmed members for an event
router.post('/attendance/get_confirm_mem',  EventAttendanceConfirmedController.getConfirmedMembersForAnEvent);

//declining confirmed members for an event 
router.post('/attendance/delete_confirmed_mem',  EventAttendanceConfirmedController.removeEventAttendanceConfirmed);

//adding attended members for an event
router.post('/attendance/add_attended_mem',  EventAttendanceAttendedController.addEventAttendanceAttended);

//getting attended mambers for an event
router.post('/attendance/get_attended_mem',  EventAttendanceAttendedController.getAttendedMembersForAnEvent);

module.exports = router;