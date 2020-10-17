//import event.attendance.attended model
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');
//import eventRegistration model
const EventRegistration = require('../model/eventRegistration.model');

//===========================================================================================
//================================== Add confirmed mamber ===================================
//=========================================================================================== 
exports.addEventAttendanceConfirmed = async function (req, res, next) {

    let newConfirmed = EventAttendanceConfirmed({
            eventId : req.body.eventId,
            responder : req.body.responder

    });

    const update_result = await EventRegistration.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})

    newConfirmed.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('Confirmed member added Successfully');
    })
    

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
    
    let newRegistered = EventRegistration({
            eventId : req.body.eventId,
            responder : req.body.responder

    });
    console.log(newRegistered);
    const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})

    newRegistered.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('Confirmed member removed Successfully');
    })
    

}

