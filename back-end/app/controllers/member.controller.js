//import User model
const Member = require('../model/member.model');
const Affiliation = require('../model/affiliation.model');
const Pastdes = require('../model/pastdes.model');
var _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//======================================================================================================
//================================== Request sent Memeber      =============================================
//====================================================================================================== 



exports.requsetMemberShip = async function (req, res, next) {

    const genSalt = await bcrypt.genSalt(10)

    const hash_pass = await bcrypt.hash(req.body.password, genSalt)
    console.log(req.body.password);
    console.log(hash_pass);

    let new_member = Member({
        memberShipNo: req.body.memberShipNo,
        fname: req.body.fname,
        lname: req.body.lname,
        nameAsMemberShip: req.body.nameAsMemberShip,
        affiID: req.body.affiID,
        email: req.body.email,
        ieeeMail: req.body.ieeeMail,
        profilepic: req.body.profilepic,
        lastlogin: req.body.lastlogin,
        contactNo: req.body.contactNo,
        password: hash_pass,
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
        newrequest: true,
        newrequest: true
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

exports.acceptOrReject = async function (req, res, next) {
    console.log(req.body);

    var state = req.body.state
    var memberShipNo = req.body.memberShipNo
    if (state == null || state == undefined || state == "") {
        state = false
    }

    if (state === true) {
        try {
            console.log(memberShipNo);
            const search = await Member.findOne({
                memberShipNo: memberShipNo
            })
            if (!search) {
                return res.status(402).send("No exsisting member");
            }
            const log = await Member.findOneAndUpdate({
                memberShipNo: memberShipNo
            }, {
                state: state,
                newrequest: false
            }, {
                new: true
            })

            return res.status(200).send({
                message: "Requset Accepted Successfully"
            });
        } catch (error) {
            return res.status(403).send("Something went wrong");
        }
    } else if (state === false) {
        try {
            console.log(memberShipNo);
            const search = await Member.findOne({
                memberShipNo: memberShipNo
            })
            if (!search) {
                return res.status(402).send("No exsisting member");
            }
            const log = await Member.findOneAndDelete({
                memberShipNo: memberShipNo
            })

            return res.status(200).send({
                message: "Requset Decline Successfully"
            });
        } catch (error) {
            return res.status(403).send("Something went wrong");
        }
    }

}

//======================================================================================================
//================================== Delete      =============================================
//====================================================================================================== 
exports.deleteMember = async function (req, res, next) {
    console.log(req.body);

    var state = req.body.state
    var memberShipNo = req.body.memberShipNo
    if (state == null || state == undefined || state == "") {
        state = false
    }
     if (state === false) {
        try {
            console.log(memberShipNo);
            const search = await Member.findOne({
                memberShipNo: memberShipNo
            })
            if (!search) {
                return res.status(402).send("No exsisting member");
            }
            const log = await Member.findOneAndDelete({
                memberShipNo: memberShipNo
            })

            return res.status(200).send({
                message: "Member Removed Successfully"
            });
        } catch (error) {
            return res.status(403).send("Something went wrong");
        }
    }

}



//======================================================================================================
//================================== View Active Members   =============================================
//====================================================================================================== 
exports.active_members = async function (req, res, next) {
    Member.find({
        state: true
    }, async function (err, docs) {
        if (docs.length != 0) {
            // console.log(docs);
            for (let index = 0; index < docs.length; index++) {

                let name = await Affl.findOne({ _id: docs[index].affiID })

                docs[index] = { ...docs[index]._doc, affname: name.affiliationname }
            }
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


exports.update_member = async function (req, res, next) {

    console.log(req.body);
    try {
        const update = await Member.findOneAndUpdate({
            memberShipNo: req.body.memberShipNo
        }, {
            fname: req.body.fname,
            lname: req.body.lname,
            contactNo: req.body.contactNo,
            nameAsMemberShip: req.body.mname,
            email: req.body.pemail,
            ieeeMail: req.body.oeail,
        }, {
            new: true
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//======================================================================================================
//=================================== Get Specific Member ==============================================
//======================================================================================================

exports.get_specific_user = async function (req, res, next) {

    console.log(req.body);
    var id = req.body.id


    try {
        const update = await Member.findOne({
            _id: id
        })

        return res.status(200).send({
            data: update
        });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//======================================================================================================
//===================================  Login    ==============================================
//======================================================================================================

exports.login = async function (req, res) {

    console.log(req.body);
    const genSalt = await bcrypt.genSalt(10)

    const user_details = await Member.findOne({
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

        const log = await bcrypt.compare(req.body.uPass, user_details.password)

        if (!log) {
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
//======================================================================================================
//===================================  Profile Pis     ==============================================
//======================================================================================================


exports.upload_image = function (req, res, next) {

    console.log(req.body.membershipnumber);

    let updateProfilePic = {
        "membershipnumber": req.body.membershipnumber,
        "profilepic": req.file.path
    }
    console.log(updateProfilePic);
    Member.find({ memberShipNo: req.body.membershipnumber }).exec().then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'No user find , No user data availble in this email'
            });
        } else if (user.length == 1) {
            if (updateProfilePic.membershipnumber == null || updateProfilePic.membershipnumber == undefined || updateProfilePic.profilepic == null || updateProfilePic.profilepic == undefined) {
                return res.status(402).json({
                    message: 'No images'
                })
            }
            Member.update({ memberShipNo: req.body.membershipnumber }, {
                $set: {
                    "profilepic": updateProfilePic.profilepic,

                }
            }, function (err) {
                if (err) return next(err);
                res.status(200).json({
                    message: 'Image Added sucessfully'
                })
            })
        }
        else {
            return res.status(401).json({
                message: 'No user find'
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });

    })

}

//======================================================================================================
//===================================   Change Password   ==============================================
//======================================================================================================
exports.password_reset = async function (req, res, next) {
    try {
        const reset_password = await Member.findOne({ _id: req.body.id })
        const log = await bcrypt.compare(req.body.c_password, reset_password.password)
        if (!log) {
            return res.status(403).send("Current password did not match");
        } else {
            const genSalt = await bcrypt.genSalt(10)
            const hash_pass = await bcrypt.hash(req.body.n_password, genSalt)
            const rese_res = await Member.findOneAndUpdate({ _id: req.body.id }, { password: hash_pass }, { new: true })
            return res.status(200).send({
                data: rese_res
            });
        }
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
}






//
exports.pastdes_by_member_id = async function (req, res, next) {
    
    try {
        const member = await Member.findOne({ memberShipNo: req.params.id })
        if(member != null){

            const member = await Member.findOne({ memberShipNo: req.params.id })
            const affiliation = await Affiliation.find({})
            const pastdes = await Pastdes.find({ MemNo : member._id })

            const data = pastdes.map( row => {
                const correct_af = affiliation.find(i => i._id == row.affiliationNo);
                return {
                    Year :  row.Year,
                    title :  row.title,
                    affiliationTitle : (correct_af && correct_af.affiliationname) ? 
                    correct_af.affiliationname : ''
                }
            })
                
            return res.status(200).json(data);
        }else{
            return res.status(404).json({ message : "User not found"});  
        }
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message : "Something went wrong"});  
    }

}


//
exports.all_rewads = async function (req, res, next) {
    
    try {
      
    const pastdes = await Pastdes.find()
    const members = await Member.find()

    let ps = _.groupBy(pastdes , 'MemNo')
        ps = Object.keys(ps).map(key => ({ MemNo : key,  pasdes : ps[key] }));
    let data = ps.map( row => {
        let reward = row.pasdes.reduce((prev, current) => {
            c_value = 0;
            switch(current.title.toLowerCase()){
                case 'president' : c_value = 5; break;
                case 'secretary' : c_value = 3; break;
                case 'chairman' : c_value = 10; break;
                case 'chair' : c_value = 10; break;
                case 'leader' : c_value = 5; break;
                case 'treasurer' : c_value = 2; break;
                default : c_value = 0;
              }
            return prev + c_value  
          },0) 
        
        return {
            _id : row.MemNo,
            reward : reward
        }
    })

   const final = members.map( member => {
        const rewards = data.find(i => i._id == member._id)
        const psdes_records = ps.find(i => i.MemNo == member._id)
        return {
            member : member,
            points : (rewards != undefined) ?  rewards.reward : 0,
        }
   })

    
    return res.status(200).json(final);
       
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message : "Something went wrong"});  
    }

}
