//import Event model
const Activity = require('../model/activity.model');

//======================================================================================================
//================================== Add activity  =====================================================
//====================================================================================================== 
exports.addActivity = function (req, res, next) {

    let new_activity = Activity({
        memberID: req.body.eventName,
        action: req.body.eventDate,
        table: req.body.startTime,
        parameters: req.body.endTime
    });
    console.log(new_activity);

    //save event  
    new_activity.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Activity added successfully ");
        res.status(201).send('Activity added Successfully');
    })


}

//======================================================================================================
//================================== Get all activities    =============================================
//====================================================================================================== 
//exports.get_all_activities = function (req, res, next) {
//    // check userdata
//    console.log("called ");
//    Activity.find(
//        function (err, docs) {
//        if (docs.length != 0) {
//            res.status(200).send({
//                data: docs
//            });
//        } else {
//            res.status(403).send('No data found')
//        }
//    })
//}

exports.get_all_activities = async function (req, res, next) {
    // check userdata
    console.log("called ");
    const result = await Activity.find({})

    console.log(result);


    if (result.length == 0)

        return res.status(403).send({

            msg: "no data found"

        })

    else

        return res.status(200).send({

            msg: "data found",

            data: result

        })
}
