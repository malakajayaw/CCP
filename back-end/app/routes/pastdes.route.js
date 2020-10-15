const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/pastdes.controller');

router.post('/addPastDesignations', DesignationController.addPastDesignation);
router.post('/deletePastDesignations', DesignationController.delete_Past_designation);
router.post('/updatePastDesignation', DesignationController.update_Past_designation);
router.get('/getPastDesignations', DesignationController.get_all_Past_designations);
router.post('/getSpecPastDesignations', DesignationController.get_spec_Past_des);
router.post('/getSpecPastAffDesignations', DesignationController.get_spec_aff_Past_des);

module.exports = router;