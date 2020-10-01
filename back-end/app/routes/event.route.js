const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller');

// add event
router.post('/addEvent',  EventController.addEvent);

//get all events
router.get('/all/events',  EventController.get_all_events);

router.post('/specificEvent',  EventController.get_event);

module.exports = router;