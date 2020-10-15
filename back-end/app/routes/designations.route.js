const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/designation.controller');

// add event
router.post('/addDesignations', DesignationController.addDesignation);

//get all events
router.get('/getDesignations', DesignationController.get_all_designations);

//get all events
//router.get('/editDesignations', DesignationController.editDesignations);

module.exports = router;