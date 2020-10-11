const Designation = require('../model/designations.model');

//=============================================================================== Add Designation

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

//=============================================================================== Get all designations

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

//=============================================================================== Get spec designations

exports.get_spec_des = async function (req, res, next) {
    var id = req.body.DesNo;

    try {
        const log = await Designation.findOne({
            DesNo: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};

//=============================================================================== Delete designation

exports.delete_designation = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Designation.findOneAndDelete({
            _id: id,
        });
        return res.status(200).send("Deleted");
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};
