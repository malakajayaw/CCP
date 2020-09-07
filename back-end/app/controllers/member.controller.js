//import User model
const Member = require('../model/member.model');



//======================================================================================================
//================================== Request sent Memeber      =============================================
//====================================================================================================== 
exports.requsetMemberShip = function (req, res, next) {
    let new_member = Member({
        memberShipNo: req.body.memberShipNo,
        fname: req.body.fname,
        lname: req.body.lname,
        nameAsMemberShip: req.body.nameAsMemberShip,
        email: req.body.email,
        ieeeMail: req.body.ieeeMail,
        profilepic: req.body.profilepic,
        lastlogin: req.body.lastlogin,
        contactNo: req.body.contactNo,
        password: req.body.password,
    });
    console.log(new_member);
    // check userdata
    Member.find({
        memberShipNo: new_member.memberShipNo
    }, function (err, docs) {
        if (docs.length == 0) {
            //save 
            new_member.save(function (err) {
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
exports.get_all_requsts = function (req, res, next) {
console.log("Called");
    // check userdata
    Member.find({
        newrequest : true , 
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
//================================== accept or reject      =============================================
//====================================================================================================== 

exports.acceptOrReject = function ( req, res, next) {
 const log =    Member.findOneAndUpdate({
        memberShipNo: memberShipNo
    }, 
 )}