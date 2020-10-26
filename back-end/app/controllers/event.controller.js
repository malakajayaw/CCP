//import Event model
const Event = require('../model/event.model');
//import Event registration model
const EventRegistration = require('../model/eventRegistration.model');

//================================== Add event  =============================================
exports.addEvent =  async function (req, res, next) {

    var uploadFileURL = "";

    //check if the event banner is added
    if(req.files !== null)
    {
        const bannerFile = req.files.banner;
        //genarate a random file name
     //   fileName =  Math.random().toString(36).substring(2, 15) + file.name;
        // file.mv(`${__dirname}/../../../front-end/public/images/events/${fileName}`,err => {
        //         if(err){
        //             return res.status(500).send(err)
        //         }  
        //     });

         const fileName =  Math.random().toString(36).substring(2, 15) + bannerFile.name;
         uploadFileURL = "http://localhost:5000/assets/banners/" + fileName;

          await bannerFile.mv("./app/public/banners/" + fileName, (err, result) => {
              if (err){ return res.status(500).send("Failed to upload Image!");}
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
        banner: uploadFileURL ,
        registrationForm : null,
        fieldNames : null
    });

   //save event  
    new_event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).send('Event added Successfully');
    })
    
}

//================================== Get all events=====================================================
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

//================================== Get a specific event  =============================================
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

//================================== delete event  =============================================
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

//================================== delete form  =============================================
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

//================================== add registration form =============================================
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

//================================== event registration  =============================================
exports.register = async function (req, res, next) {
   
    //convert the string into an array
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

//================================== get responses  =============================================
exports.getResponses = async function (req, res, next) {

    var id = req.body.id;

    try {
        const responses = await  EventRegistration.find({
            eventId: id, state:false })
       return res.status(200).send({
           data: responses
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
 
 }

 //================================== update event  =============================================
 exports.updateEvent = async function (req, res, next) {

    var fileName = '';
    var uploadFileURL = "";

    if(req.files !== null)
    {
        const bannerFile = req.files.banner;
        //genarate a random file name
        fileName =  Math.random().toString(36).substring(2, 15) + bannerFile.name;
        uploadFileURL = "http://localhost:5000/assets/banners/" + fileName;

         await bannerFile.mv("./app/public/banners/" + fileName, (err, result) => {
             if (err){ return res.status(500).send("Failed to upload Image!");}
           });
    }else{
        fileName = req.body.banner;
    }
    
    try {
        const update = await Event.findOneAndUpdate({
            _id: req.body.eventId
        }, {
            eventName: req.body.eventName,
            eventDate: req.body.eventDate,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            venue: req.body.venue,
            description: req.body.description,
            hostingAffiliation: req.body.hostingAffiliation,
            volunteers: req.body.volunteers,
            banner: uploadFileURL
        }, {
            new: true
        })

        return res.status(200).send("Event Updated");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
    
}