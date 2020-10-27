//import affiliation model
const Affiliation = require('../model/affiliation.model');
const Member = require('../model/member.model');

//======================================================================================================
//================================== Add Affiliation  =============================================
//====================================================================================================== 
exports.addAffiliation = function (req, res, next) {

    var fileName = '';

    
    
    let new_affiliation = Affiliation({
        
        affiliationtype: req.body.affiliationtype,
        affiliationname: req.body.affiliationname,
        affiliationno: req.body.affiliationno,
        date: req.body.date,
        status: req.body.status,
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
//================================== View Active Members   =============================================
//====================================================================================================== 
exports.view_affiliation = async function (req, res, next) {
    
    Member.find({
        state: true,
        affiID: req.params.id
    }, async function (err, docs) {
        if (docs.length != 0) {
            // console.log(docs);
            for (let index = 0; index < docs.length; index++) {

                let name = await Affiliation.findOne({ _id: docs[index].affiID })
                if(name== null || name == undefined)
                {
                    affname = ''
                }
                else{
                    docs[index] = { ...docs[index]._doc, affname: name.affiliationname }
                }
            }
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

//======================================================================================================
//================================== Get all affiliations       =============================================
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
//================================== Get a specific affiliation  =============================================
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


exports.deleteAffiliation = async  function (req, res, next) {

    var id = req.body.id

        try {
            const search  = await Affiliation.findOne({ _id: id})
            if(!search){
                return  res.status(402).send("No exsisting affiliation");
            }
            const log = await  Affiliation.findOneAndDelete({
                _id: id
            })
    
          return  res.status(200).send({
            message : "Affiliation Successfully Deleted!"
          });
        } catch (error) {
            return  res.status(403).send("Something went wrong");
        }
}





exports.updateAffiliation = async function (req, res, next) {

    
    try {
        const update = await Affiliation.findOneAndUpdate({
            _id: req.body.affiID
        }, {
            affiliationtype: req.body.affiliationtype,
            affiliationname: req.body.affiliationname,
            affiliationno: req.body.affiliationno,
            date: req.body.date,
            status: req.body.status,
        }, {
            new: true
        })

        return res.status(200).send("Affiliation Updated");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }
    
}