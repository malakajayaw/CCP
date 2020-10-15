const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/designationAss.controller');

// add event
router.post('/addAssignment', DesignationController.addAssignment);

//get all events
router.get('/getAssignments', DesignationController.get_all_assignments);

//get all events
//router.get('/editDesignations', DesignationController.editDesignations);

module.exports = router;