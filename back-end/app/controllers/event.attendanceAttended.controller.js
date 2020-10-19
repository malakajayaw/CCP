//import event.attendance.attended model
const EventAttendanceAttended = require('../model/event.attendance.attended.model');
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');
const Member = require('../model/member.model');
const nodemailer = require("nodemailer");

//===========================================================================================
//================================== Add Attended mamber ====================================
//=========================================================================================== 

exports.addEventAttendanceAttended = async function (req, res, next) {
    let newCAttended = EventAttendanceAttended({
            eventId : req.body.eventId,
            responder : req.body.responder
    });

    
    const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})

    newCAttended.save(async function (err) {
        if (err) {
            return next(err);
        }
        const member = await Member.findOne({memberShipNo: newCAttended.responder});
        if(member == null)
        {
            //email 
            //const member = await Member.findOne({memberShipNo: newCAttended.responder});
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
                to: member.email,
                subject: 'IEEE Sri Lanka',
                text: 'Your registration for the event has been confirmed.',
                html: `<b>Welcome to IEEE Sri Lanka! </b><br/><br/><br/>Your registration for the event has been confirmed.<br/><br/>`,
            };

            transporter.sendMail(mailOptions).then(res => console.log(res)).catch(err => console.log(err));
    
        }
        else{
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
            // to: newCAttended.email,
            to:"maneesharajapaksha1@gmail.com",
            subject: 'IEEE Sri Lanka',
            text: 'Your registration for the event has been confirmed.',
            html: `<b>Welcome to IEEE Sri Lanka! </b><br/><br/><br/>Your registration for the event has been confirmed.<br/><br/>`,
        };

 
        transporter.sendMail(mailOptions).then(res => console.log(res)).catch(err => console.log(err));
    }

        res.status(201).send('Attended member added Successfully');
    })
    

}

//===========================================================================================
//================================== Get Attended Members ==============================
//=========================================================================================== 


exports.getAttendedMembersForAnEvent = async function (req, res, next) {

    var id = req.body.id;

    try {
        const responses = await  EventAttendanceAttended.find({
            eventId: id })
       return res.status(200).send({
           data: responses
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }
