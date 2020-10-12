const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/designation.controller');

router.post('/addDesignations', DesignationController.addDesignation);
router.post('/deleteDesignations', DesignationController.delete_designation);
router.post('/updateDesignation', DesignationController.update_designation);
router.get('/getDesignations', DesignationController.get_all_designations);
router.post('/getSpecDesignations', DesignationController.get_spec_des);
router.post('/updateDesignationMem', DesignationController.update_designation_mem);
router.post('/removeDesignationMem', DesignationController.remove_designation_mem);

module.exports = router;