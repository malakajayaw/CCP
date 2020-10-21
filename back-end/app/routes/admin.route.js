const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/admin.controller')
// add member
router.post('/admin',  AdminController.addAdmin); 
router.post('/signin',  AdminController.login); 


router.get('/all/admin',  AdminController.get_all_admins);
router.post('/admin/update',  AdminController.update_admin);
router.post('/specif/admin',  AdminController.get_specific_admin);
router.post('/delete' ,   AdminController.deleteAdmin)
router.post('/reset' ,   AdminController.reset_member_pw_default)
router.post('/admin/reset' ,   AdminController.update_password_admin)


module.exports = router;