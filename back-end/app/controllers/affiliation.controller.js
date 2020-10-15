//import Affiliation model
const Affiliation = require('../model/affiliation.model');

//======================================================================================================
//================================== Add Affiliation  =============================================
//====================================================================================================== 
exports.addaAffiliation = function (req, res, next) {

    let new_affiliation = Affiliation({
        affiID: req.body.affiID,
        affiliationtype: req.body.affiliationtype,
        affiliationname: req.body.affiliationname,
        affiliationno: req.body.affiliationno,
        date: req.body.date,
        status: req.body.status,
        updated_at: req.body.updated_at,
    });
    console.log(new_affiliation);

    //save affiliation  
    new_affiliation.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Affiliation added successfully ");
        res.status(201).send('Affiliation added Successfully');
    })


}

//======================================================================================================
//================================== Get all Affiliation       =============================================
//====================================================================================================== 
exports.get_all_affiliation = function (req, res, next) {
    // check userdata
    Affiliation.find(function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}
