const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member.controller')
// add member
router.post('/requset',  MemberController.requsetMemberShip);


router.get('/all/request',  MemberController.get_all_requsts);


module.exports = router;