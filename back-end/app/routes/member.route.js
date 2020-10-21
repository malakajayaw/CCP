const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member.controller')
// add member
router.post('/requset',  MemberController.requsetMemberShip);
router.post('/reset',  MemberController.password_reset);


router.get('/all/request',  MemberController.get_all_requsts);
router.post('/req/action',  MemberController.acceptOrReject);
router.get('/all/active',  MemberController.active_members);
router.post('/mem/update',  MemberController.update_member);
router.post('/specif/member',  MemberController.get_specific_user);
router.post('/signin',  MemberController.login); 
router.post('/update',  upload.single('photos'), MemberController.upload_image); 
router.get('/pastdes/:id' ,   MemberController.pastdes_by_member_id)
router.get('/all/rewards' ,   MemberController.all_rewads)
router.post('/delete' ,   MemberController.deleteMember)

module.exports = router;