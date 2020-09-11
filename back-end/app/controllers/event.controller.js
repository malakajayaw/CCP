//import Event model
const Event = require('../model/event.model');

//======================================================================================================
//================================== Add event  =============================================
//====================================================================================================== 
exports.addEvent = function (req, res, next) {

    var fileName = '';

    if(req.files !== null)
    {
        const file = req.files.banner;
        fileName = file.name;
        console.log(req.files);
        file.mv(`${__dirname}/../public/images/events/${fileName}`,err => {
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
        banner: fileName
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
