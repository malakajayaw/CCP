//import event.attendance.attended model
const EventAttendanceConfirmed = require('../model/event.attendance.confirmed.model');
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
        const responses = await  EventAttendanceConfirmed.find({
            eventId: id, state: false })
       return res.status(200).send({
           data: responses
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }

//===========================================================================================
//================================== Delete A Confirmed Member ==============================
//=========================================================================================== 

exports.deleteConfirmedMemebr = async  function (req, res, next) {

    var id = req.body.id

        try {
            const search  = await EventAttendanceConfirmed.findOne({ _id: id})
            if(!search){
                return  res.status(402).send("No exsisting event");
            }
            const log = await  EventAttendanceConfirmed.findOneAndDelete({
                _id: id
            })
    
          return  res.status(200).send({
            message : "Confirmed Member Deleted!"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
}

//===========================================================================================
//================================== Delete A Registered Member ==============================
//=========================================================================================== 

exports.deleteRegisteredMemebr = async  function (req, res, next) {

    var id = req.body.id

        try {
            const search  = await EventRegistration.findOne({ _id: id})
            if(!search){
                return  res.status(402).send("No exsisting event");
            }
            const log = await  EventRegistration.findOneAndDelete({
                _id: id
            })
    
          return  res.status(200).send({
            message : "Registered Member Deleted!"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
}
