//import affiliation model
const Affiliation = require('../model/affiliationview.model');



//======================================================================================================
//================================== Get all affiliations       ========================================
//====================================================================================================== 
exports.get_all_affiliations = function (req, res, next) {
    // check userdata
    Affiliation.find( function (err, docs) {
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
//================================== Get a specific affiliation  =======================================
//====================================================================================================== 
exports.get_affiliation = async function (req, res, next) {

    var id = req.body.id;
    try {
        const affiliation = await  Affiliation.findOne({
            _id: id })
       return res.status(200).send({
           data: affiliation
       });
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}


