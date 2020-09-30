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
        newrequest: true,   newrequest:true
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

exports.acceptOrReject = async  function (req, res, next) {
    console.log(req.body);
   
    var state = req.body.state
    var memberShipNo = req.body.memberShipNo
    if (state == null || state == undefined || state == "") {
        state = false
    }

    if(state === true){
        try {
            console.log(memberShipNo);
            const search  = await Member.findOne({ memberShipNo: memberShipNo})
            if(!search){
                return  res.status(402).send("No exsisting member");
            }
            const log = await  Member.findOneAndUpdate({
                memberShipNo: memberShipNo
            }, {
                state: state,
                newrequest:false
            }, {
                new: true
            })
    
          return  res.status(200).send({
              message : "Requset Accepted Successfully"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
    }else if(state === false){
        try {
            console.log(memberShipNo);
            const search  = await Member.findOne({ memberShipNo: memberShipNo})
            if(!search){
                return  res.status(402).send("No exsisting member");
            }
            const log = await  Member.findOneAndDelete({
                memberShipNo: memberShipNo
            })
    
          return  res.status(200).send({
            message : "Requset Decline Successfully"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
    }
   



}

//======================================================================================================
//================================== View Active Members   =============================================
//====================================================================================================== 

exports.active_members = async function (req, res, next) {

    Member.find({
        state: true
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


exports.update_member = async function (req, res, next) {

    console.log(req.body);
    try {
        const update = await  Member.findOneAndUpdate({
            memberShipNo: req.body.memberShipNo
        }, {
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            contactNo : req.body.contactNo,
        }, {new: true})
    
       return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}
exports.get_specific_user = async function (req, res, next) {

    console.log(req.body);
    var id = req.body.id


    try {
        const update = await  Member.findOne({
            _id: id })
    
       return res.status(200).send({
           data: update
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}