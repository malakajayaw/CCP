const express = require('express');
const router = express.Router();
const AffiliationController = require('../controllers/affiliation.controller');

// add affiliation
router.post('/addAffiliation',  AffiliationController.addAffiliation);

//get all affiliation
router.get('/all/affiliations',  AffiliationController.get_all_affiliations);

router.post('/specificAffiliation',  AffiliationController.get_affiliation);

router.post('/delete',  AffiliationController.deleteAffiliation);

module.exports = router;