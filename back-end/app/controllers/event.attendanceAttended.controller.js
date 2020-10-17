//import event.attendance.attended model
const EventAttendanceAttended = require('../model/event.attendance.attended.model');
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');

//===========================================================================================
//================================== Add Attended mamber ====================================
//=========================================================================================== 

exports.addEventAttendanceAttended = async function (req, res, next) {
    let newCAttended = EventAttendanceAttended({
            eventId : req.body.eventId,
            responder : req.body.responder

    });

    const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})

    newCAttended.save(function (err) {
        if (err) {
            return next(err);
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
