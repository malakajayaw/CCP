//import Event model
const Activity = require('../model/activity.model');

//======================================================================================================
//================================== Add activity  =============================================
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
//================================== Get all activities       =============================================
//====================================================================================================== 
exports.get_all_activities = function (req, res, next) {
    // check userdata
    Activity.find(function (err, docs) {
        if (docs.length != 0) {
            //res.status(200).send({
            //    data: docs
            //});
            const actl = [
            { actId: 1, editId: '0124', activity: 'Insert', table: 'Member', date: '02/10/2020 18:10:04', param: 'Nimal' },
            { actId: 2, editId: '0136', activity: 'Delete', table: 'Event', date: '02/10/2020 18:10:04', param: 'SLIIT IEEE Con' },
            { actId: 3, editId: '0175', activity: 'Update', table: 'Affiliation', date: '02/10/2020 18:10:04', param: 'SLIIT SB' }
    ];
            res.json(actl);
        } else {
            res.status(403).send('No data found')
        }
    })
}
