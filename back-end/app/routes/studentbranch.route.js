const express = require('express');
const router = express.Router();
const AffiliationController = require('../controllers/affiliation.controller');

// add affiliation
router.post('/addAffiliation',  AffiliationController.addAffiliation);

//get all affiliation
router.get('/all/affiliations',  AffiliationController.get_all_affiliations);

//get one affiliation
router.post('/specificAffiliation',  AffiliationController.get_affiliation);

//delete affiliation
router.post('/delete',  AffiliationController.deleteAffiliation);

//update affiliation
router.post('/update',  AffiliationController.updateAffiliation);

module.exports = router;