const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activitylog.controller');

// add event
router.post('/addActivity', ActivityController.addActivity);

//get all events
router.get('/getActivities', ActivityController.get_all_activities);

module.exports = router;