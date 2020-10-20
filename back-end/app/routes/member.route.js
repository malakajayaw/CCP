const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member.controller')
// add member
router.post('/requset',  MemberController.requsetMemberShip);


router.get('/all/request',  MemberController.get_all_requsts);
router.post('/req/action',  MemberController.acceptOrReject);
router.get('/all/active',  MemberController.active_members);
router.post('/mem/update',  MemberController.update_member);
router.post('/specif/member',  MemberController.get_specific_user);
router.post('/signin',  MemberController.login);


module.exports = router;