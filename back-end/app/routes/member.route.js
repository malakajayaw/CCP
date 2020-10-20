const express = require('express');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/profilepic/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime().toString() + file.originalname);
    }
})

const fileFiler = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        // accept
        cb(null, true)
    } else {
        // reject
        cb(new Error('message : file not acceptable'), false)

    }

}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFiler
});



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