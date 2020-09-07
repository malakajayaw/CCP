const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member.controller')
// add member
router.post('/requset',  MemberController.requsetMemberShip);


router.get('/all/request',  MemberController.get_all_requsts);
router.post('/req/action',  MemberController.acceptOrReject);


module.exports = router;