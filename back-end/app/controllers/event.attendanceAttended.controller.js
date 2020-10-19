//import event.attendance.attended model
const EventAttendanceAttended = require('../model/event.attendance.attended.model');
//import event attendance confirmed model
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');

//===========================================================================================
//================================== Add Attended mamber ====================================
//=========================================================================================== 

exports.addEventAttendanceAttended = async function (req, res, next) {
    const add_conf1 = await EventAttendanceAttended.findOne({responder: req.body.responder});
    if(add_conf1 == null)
    {
        let newCAttended = EventAttendanceAttended({
                eventId : req.body.eventId,
                responder : req.body.responder
        });
        const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})

        newCAttended.save(async function (err) {
            if (err) {
              return next(err);
            }
            res.status(201).send('Attended member added Successfully');
        })
    }
    else
    {
        const update_result = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})
        const update_result2 = await EventAttendanceAttended.findOneAndUpdate({responder: req.body.responder}, {state:false}, {new:false})
        res.status(201).send('Attended member added Successfully');
    }
    

}

//===========================================================================================
//================================== Get Attended Members ==============================
//=========================================================================================== 


exports.getAttendedMembersForAnEvent = async function (req, res, next) {

    var id = req.body.id;

    try {
        const responses = await  EventAttendanceAttended.find({eventId: id , state: false })
        return res.status(200).send({
           data: responses
        });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }

 //===========================================================================================
//================================== Remove A Attended Member ==============================
//=========================================================================================== 

exports.removeEventAttendanceAttended = async function (req, res, next) {
  
    const update_result = await EventAttendanceAttended.findOneAndUpdate({responder: req.body.responder}, {state:true}, {new:true})
    const update_result2 = await EventAttendanceConfirmed.findOneAndUpdate({responder: req.body.responder}, {state:false}, {new:false})

    res.status(201).send('Attended member removed Successfully');
}
