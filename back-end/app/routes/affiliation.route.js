const express = require('express');
const router = express.Router();
const AffiliationViewController = require('../controllers/affiliationview.controller');



//get all affiliation
router.get('/all/affiliationview',  AffiliationViewController.get_all_affiliationview);

//get one affiliation
router.post('/specificAffiliationView',  AffiliationViewController.get_affiliation);



module.exports = router;