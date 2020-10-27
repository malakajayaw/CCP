const express = require('express');
const router = express.Router();
const AffiliationController = require('../controllers/affiliationview.controller');



//get all affiliation
router.get('/all/affiliations',  AffiliationController.get_all_affiliations);

//get one affiliation
router.post('/specificAffiliation',  AffiliationController.get_affiliation);

router.get('/all/affiliationview/:id',  AffiliationController.view_affiliation);



module.exports = router;