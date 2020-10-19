//import event.attendance.attended model
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');
//import eventRegistration model
const EventRegistration = require('../model/eventRegistration.model');
//import Member model
const Member = require('../model/member.model');
//used for email sending
const nodemailer = require("nodemailer");

//===========================================================================================
//================================== Add confirmed mamber ===================================
//=========================================================================================== 
exports.addEventAttendanceConfirmed = async function (req, res, next) {

    const add_conf1 = await EventAttendanceConfirmed.findOne({responder: req.body.responder});
    if(add_conf1 == null)
    {
        let newConfirmed = EventAttendanceConfirmed({
            eventId : req.body.eventId,
            responder : req.body.responder
        });

        const update_result = await EventRegistration.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})
        
        newConfirmed.save(async function (err) {
        if (err) {
            return next(err);
        }
        //Sending the verificataion email
        const member = await Member.findOne({memberShipNo: newConfirmed.responder});
        if(member != null)
        {
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
                to: newConfirmed.responder,
                subject: 'IEEE Sri Lanka',
                text: 'Your registration for the event has been confirmed.',
                html: `<b>Welcome to IEEE Sri Lanka! </b><br/><br/><br/>Your registration for the event has been confirmed.<br/><br/>`,
            };
            transporter.sendMail(mailOptions).then(res => console.log(res)).catch(err => console.log(err));
        }
        res.status(201).send('Confirmed member added Successfully');
        })
    }
    else
    {
        const update_result = await EventRegistration.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})
        const update_result2 = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:false}, {new:false})
        res.status(201).send('Confirmed member added Successfully');
    }
}

//===========================================================================================
//================================== Get Confirmed Members ==============================
//=========================================================================================== 
exports.getConfirmedMembersForAnEvent = async function (req, res, next) {
    var id = req.body.id;
    try {
        const responses = await  EventAttendanceConfirmed.find({eventId: id, state: false })
       return res.status(200).send({
           data: responses
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }

//===========================================================================================
//================================== Remove A Confirmed Member ==============================
//=========================================================================================== 

exports.removeEventAttendanceConfirmed = async function (req, res, next) {
    
    const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})
    const update_result2 = await EventRegistration.findOneAndUpdate({responder: req.body.responder}, {state:false}, {new:false})

    res.status(201).send('Confirmed member removed Successfully');
}

