const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/designationAss.controller');

router.post('/addAssignment', DesignationController.addAssignment);
router.get('/getAssignments', DesignationController.get_all_assignments);
router.post('/deleteAssignment', DesignationController.delete_assignment);
router.post('/updateAssignment', DesignationController.updateAssignment);
router.post('/getSpecAssignment', DesignationController.getSpecAssignment);

module.exports = router;