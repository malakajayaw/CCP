//import Event model
const Event = require('../model/event.model');
const EventRegistration = require('../model/eventRegistration.model');

//======================================================================================================
//================================== Add event  =============================================
//====================================================================================================== 
exports.addEvent = function (req, res, next) {

    var fileName = '';

    if(req.files !== null)
    {
        const file = req.files.banner;
        fileName =  Math.random().toString(36).substring(2, 15) + file.name;
        file.mv(`${__dirname}/../../../front-end/public/images/events/${fileName}`,err => {
        //file.mv(`${__dirname}/../public/images/events/${fileName}`,err => {
                if(err){
                    console.log(err);
                    return res.status(500).send(err)
                }  
            });
    }
    
    let new_event = Event({
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        venue: req.body.venue,
        description: req.body.description,
        hostingAffiliation: req.body.hostingAffiliation,
        volunteers: req.body.volunteers,
        status: req.body.status,
        formLink : req.body.formLink,
        banner: fileName,
        registrationForm : null,
        fieldNames : null
    });
    console.log(new_event);

   //save event  
    new_event.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Event added successfully ");
        res.status(201).send('Event added Successfully');
    })
    
}

//======================================================================================================
//================================== Get all events       =============================================
//====================================================================================================== 
exports.get_all_events = function (req, res, next) {
    // check userdata
    Event.find( function (err, docs) {
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
//================================== Get a specific event  =============================================
//====================================================================================================== 
exports.get_event = async function (req, res, next) {

    var id = req.body.id;
    try {
        const event = await  Event.findOne({
            _id: id })
       return res.status(200).send({
           data: event
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}


exports.deleteEvent = async  function (req, res, next) {

    var id = req.body.id

        try {
            const search  = await Event.findOne({ _id: id})
            if(!search){
                return  res.status(402).send("No exsisting event");
            }
            const log = await  Event.findOneAndDelete({
                _id: id
            })
    
          return  res.status(200).send({
            message : "Event Successfully Deleted!"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
}

exports.deleteForm = async  function (req, res, next) {

    try {
        const update = await Event.findOneAndUpdate({
            _id: req.body.id
        }, {
            registrationForm: null,
            fieldNames : null
        }, {
            new: true
        })

        const search  = await EventRegistration.findOne({ eventId: req.body.id})
        if(search){
            const log = await  EventRegistration.deleteMany({
                eventId: req.body.id
            })
        }

        return  res.status(200).send({
            message : "Event Form Successfully Deleted!"
          });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
}

exports.addRegistrationForm = async function (req, res, next) {
    
    try {
        const update = await Event.findOneAndUpdate({
            _id: req.body.id
        }, {
            registrationForm: req.body.registrationForm,
            fieldNames : req.body.fieldNames
        }, {
            new: true
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

exports.register = async function (req, res, next) {
   
   var dataArr = req.body.formData.split(',')

   let new_registration = EventRegistration({
        eventId: req.body.eventId,
        formData: dataArr,
        responder : req.body.responder
    });

   //save data  
   new_registration.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('Registered Successfully!');
    })

}

exports.getResponses = async function (req, res, next) {

    var id = req.body.id;

    try {
        const responses = await  EventRegistration.find({
            eventId: id })
       return res.status(200).send({
           data: responses
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }