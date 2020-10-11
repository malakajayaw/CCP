//import Event model
const Designation = require('../model/designations.model');

//======================================================================================================
//================================== Add Designation  =============================================
//====================================================================================================== 
exports.addDesignation = function (req, res, next) {

    let new_designation = Designation({
        DesNo: req.body.DesNo,
        title: req.body.title,
        affiliationNo: req.body.affiliationNo,
        type: req.body.type,
        updated_at: req.body.updated_at,
    });
    console.log(new_designation);

    //save event  
    new_designation.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Designation added successfully ");
        res.status(201).send('Designation added Successfully');
    })


}

//======================================================================================================
//================================== Get all activities       =============================================
//====================================================================================================== 
exports.get_all_designations = function (req, res, next) {
    // check userdata
    Designation.find(function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}
