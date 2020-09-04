const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member.controller')
// add member
router.post('/requset',  MemberController.requsetMemberShip);


module.exports = router;