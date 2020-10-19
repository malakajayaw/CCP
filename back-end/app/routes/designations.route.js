const express = require('express');
const router = express.Router();
const DesignationController = require('../controllers/designation.controller');

router.post('/addDesignations', DesignationController.addDesignation);
router.post('/deleteDesignations', DesignationController.delete_designation);
router.post('/updateDesignation', DesignationController.update_designation);
router.get('/getDesignations', DesignationController.get_all_designations);
router.post('/getSpecDesignations', DesignationController.get_spec_des);
router.post('/getAffSpecDesignations', DesignationController.get_aff_spec_des);
router.post('/updateDesignationMem', DesignationController.update_designation_mem);
router.post('/removeDesignationMem', DesignationController.remove_designation_mem);
router.get('/getAllMembers', DesignationController.get_all_members);
router.post('/getAffSpecMembers', DesignationController.get_aff_spec_members);
router.post('/getSpecMember', DesignationController.get_spec_mem);
router.post('/getNoAffType', DesignationController.get_no_aff_type);
router.post('/getActiveMemCount', DesignationController.get_active_members_count);
router.post('/getAllMemCount', DesignationController.get_all_members_count);
router.post('/getPendingMemCount', DesignationController.get_request_members_count);

module.exports = router;