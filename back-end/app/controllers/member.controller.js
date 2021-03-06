//import User model
const Member = require('../model/member.model');
const Affiliation = require('../model/affiliation.model');
const Pastdes = require('../model/pastdes.model');
var _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


//======================================================================================================
//================================== Request sent Memeber      =============================================
//====================================================================================================== 



exports.requsetMemberShip = async function (req, res, next) {

    const genSalt = await bcrypt.genSalt(10)

    const hash_pass = await bcrypt.hash(req.body.password, genSalt)

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
                
                res.status(201).send('Sent Requset Successfully');


            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "Cpp.sd03.2020@gmail.com",
                    pass: "cpp@sd032020"
                },
                tls: { rejectUnauthorized: false }
            });
           
            
            var mailOptions = {
                from: '"IEEE Sri Lanka" <Cpp.sd03.2020@gmail.com>',
                to: new_member.email,
                subject: 'IEEE Sri Lanka',
                text: 'Your registration request has been sent. You will recive a confirmation email after profile is authorized.',
                html: `<b>Welcome to IEEE Sri Lanka! </b><br/><br/>
                <br/>Your registration request has been sent. You will recive a confirmation email after profile is authorized.<br/><br/>`,
            };
       
            transporter.sendMail(mailOptions).then(res => console.log(res)).catch(err => console.log(err));
           
            })
        } else {
            res.status(403).send('Already have')
        }
    })
}
//======================================================================================================
//================================== Get all requsest       =============================================
//====================================================================================================== 
exports.get_all_requsts = async function (req, res, next) {

    // check userdata
    Member.find({
        newrequest: true,
        newrequest: true
    }, async function (err, docs) {
        if (docs.length != 0) {
            for (let index = 0; index < docs.length; index++) {
                
                let name = await Affiliation.findOne({ _id: docs[index].affiID })

                if(name== null || name == undefined)
                {
                    affname = ''
                }
                else{
                    docs[index] = { ...docs[index]._doc, affname: name.affiliationname }
                }
               
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
//================================== View Active Members   =============================================
//====================================================================================================== 
exports.active_members = async function (req, res, next) {
    Member.find({
        state: true
    }, async function (err, docs) {
        if (docs.length != 0) {
        
            for (let index = 0; index < docs.length; index++) {

                let name = await Affiliation.findOne({ _id: docs[index].affiID })
                if(name== null || name == undefined)
                {
                    affname = ''
                }
                else{
                    docs[index] = { ...docs[index]._doc, affname: name.affiliationname }
                }
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
//================================== accept or reject      =============================================
//====================================================================================================== 

exports.acceptOrReject = async function (req, res, next) {
  

    var state = req.body.state
    var memberShipNo = req.body.memberShipNo

    if (state == null || state == undefined || state == "") {
        state = false
    }

    if (state === true) {
        try {
            
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
            }
            )
            if(res.status(200)){
                const mail = await Member.findOne({
                    memberShipNo: memberShipNo
                })
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "Cpp.sd03.2020@gmail.com",
                        pass: "cpp@sd032020"
                    },
                    tls: { rejectUnauthorized: false }
                });
               
                
                var mailOptions = {
                    from: '"IEEE Sri Lanka" <Cpp.sd03.2020@gmail.com>',
                    to: mail.email,
                    subject: 'IEEE Sri Lanka',
                    text: 'Your registration request has been authorized. You can login to your profile now.',
                    html: `<b>Welcome to IEEE Sri Lanka!</b><br/>
                    <br/>Congratulations!</br>
                    <br/>Dear ${mail.fname},</br>
                    <br/>Your registration request has been authorized. You can login to your profile using your IEEE Membership
                    number and password.<br/><br/>`,
                };
           
                transporter.sendMail(mailOptions).then(res => console.log(res)).catch(err => console.log(err));
            }
            return res.status(200).send({
                message: "Requset Accepted Successfully"
            });

                




        } catch (error) {
            return res.status(403).send("Something went wrong");
        }
    } else if (state === false) {
        try {
          
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
    

    var state = req.body.state
    var memberShipNo = req.body.memberShipNo
    if (state == null || state == undefined || state == "") {
        state = false
    }
     if (state === false) {
        try {
         
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
//================================== Update member         =============================================
//====================================================================================================== 


exports.update_member = async function (req, res, next) {


    try {
        const update = await Member.findOneAndUpdate({
            memberShipNo: req.body.memberShipNo
        }, {
            fname: req.body.fname,
            lname: req.body.lname,
            contactNo: req.body.contactNo,
            nameAsMemberShip: req.body.nameAsMemberShip,
            affiID: req.body.affiID,
            email: req.body.email,
            ieeeMail: req.body.ieeeMail,
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
        if(await Affiliation.findOne({ _id: null }))
        {
            user_details.affiID = ''
        }
        else if(await Affiliation.findOne({ _id: user_details.affiID }) )
        {
            let aff = await Affiliation.findOne({ _id: user_details.affiID })
            user_details.affiID = aff.affiliationname
        }

            
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


    let updateProfilePic = {
        "membershipnumber": req.body.membershipnumber,
        "profilepic": req.file.path
    }
 
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






//======================================================================================================
//===================================   Past Designations ==============================================
//======================================================================================================
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
                    affiliationTitle : (correct_af && correct_af.affiliationname) ?  correct_af.affiliationname : ''
                }
            })
                
            return res.status(200).json(data);
        }else{
            return res.status(404).json({ message : "User not found"});  
        }
        
    } catch (error) {
   
        return res.status(403).json({ message : "Something went wrong"});  
    }

}


//======================================================================================================
//================================  Rewards with all user details ======================================
//======================================================================================================
exports.all_rewads = async function (req, res, next) {
    
    try {
      
    const pastdes = await Pastdes.find()
    const affiliation = await Affiliation.find()
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
        // const psdes_records = ps.find(i => i.MemNo == member._id)
        const mem_af = affiliation.find(i => i._id == member.affiID)
        return {
            member : member,
            points : (rewards != undefined) ?  rewards.reward : 0,
            affiliation : (mem_af && mem_af.affiliationname) ? mem_af.affiliationname : "",
        }
   })

    
    return res.status(200).json(final);
       
    } catch (error) {
       
        return res.status(403).json({ message : "Something went wrong"});  
    }

}

