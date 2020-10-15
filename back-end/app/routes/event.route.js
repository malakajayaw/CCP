const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');

// add event
router.post('/addEvent',  EventController.addEvent);

//get all events
router.get('/all/events',  EventController.get_all_events);

//get one event
router.post('/specificEvent',  EventController.get_event);

//delete event
router.post('/delete',  EventController.deleteEvent);

//create event registration form
router.post('/addForm',  EventController.addRegistrationForm);

//register to an event
router.post('/register',  EventController.register);

//get event registration responses
router.post('/getResponses',  EventController.getResponses);

//delete a event form
router.post('/deleteForm',  EventController.deleteForm);

module.exports = router;