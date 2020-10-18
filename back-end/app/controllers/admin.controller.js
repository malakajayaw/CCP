//import User model
const Admin = require('../model/admin.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//======================================================================================================
//================================== Request sent Memeber      =============================================
//====================================================================================================== 
exports.addAdmin = function (req, res, next) {
    let new_admin = Admin({
        memberShipNo: req.body.memberShipNo,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        lastlogin: req.body.lastlogin,
        contactNo: req.body.contactNo,
        password: req.body.password,
    });
    console.log(new_admin);
    // check userdata
    Admin.find({
        memberShipNo: new_admin.memberShipNo
    }, function (err, docs) {
        if (docs.length == 0) {
            //save 
            new_admin.save(function (err) {
                if (err) {
                    return next(err);
                }
                console.log("Sent requset successfully ");
                res.status(201).send('Sent Requset Successfully');
            })
        } else {
            res.status(403).send('Already have')
        }
    })
}
//======================================================================================================
//================================== Get all requsest       =============================================
//====================================================================================================== 
exports.get_all_admins = function (req, res, next) {
    console.log("Called");
    // check userdata
    Admin.find({
    }, function (err, docs) {
        if (docs.length != 0) {


            res.status(200).send({
                data: docs
            });

        } else {
            res.status(403).send('No data found')
        }
    })
}

//======================================================================================================
//================================== Update member         =============================================
//====================================================================================================== 


exports.update_admin = async function (req, res, next) {

    console.log(req.body);
    try {
        const update = await Admin.findOneAndUpdate({
            memberShipNo: req.body.memberShipNo
        }, {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            contactNo: req.body.contactNo,
        }, {
            new: true
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}
exports.get_specific_admin = async function (req, res, next) {

    console.log(req.body);
    var id = req.body.id


    try {
        const update = await Admin.findOne({
            _id: id
        })

        return res.status(200).send({
            data: update
        });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}
exports.login = async function (req, res) {

    console.log(req.body);
    const user_details = await Admin.findOne({
        memberShipNo: req.body.memberShipNo
    });
    if (user_details === null) {
        return res.status(406).send({
            data: null,
            success: false,
            message: 'No user found',
        });
    } else {

        console.log(user_details.password);
        console.log(req.body.uPass);
     
        const isEqual = await user_details.password.localeCompare(req.body.uPass)
        if (isEqual == 1 || isEqual == -1) {
            return res.status(406).send({
                data: null,
                success: false,
                message: 'Password is incorrect',
            });
        } else {
            const token = jwt.sign({
                memberShipNo: user_details.memberShipNo,
                email: user_details.email,
                nic: user_details.nic,
                role: user_details.role,
               
            }, "thisistokenforieee2019", {
                expiresIn: '240h'
            });
            console.log(user_details);
            return res.status(200).send({
                data: {
                    "token": token,
                    "role": user_details.role,
                    "details": user_details
                },
                success: true,
                message: 'Successfully login',
            });
        }
    }

}