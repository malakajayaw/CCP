const PastDesignations = require('../model/pastdes.model');

//=============================================================================== Add Past Designation

exports.addPastDesignation = function (req, res, next) {

    let new_past_designation = PastDesignations({
        title: req.body.title,
        affiliationNo: req.body.affiliationNo,
        MemNo: req.body.MemNo,
        Year: req.body.Year,
        updated_at: req.body.updated_at,
    });
    console.log(new_past_designation);

    //save event  
    new_past_designation.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Past Designation added successfully ");
        res.status(201).send('Past Designation added Successfully');
    })


}

//=============================================================================== Get all Past designations

exports.get_all_Past_designations = function (req, res, next) {
    // check userdata
    PastDesignations.find(function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

//=============================================================================== Get spec Past designations

exports.get_spec_Past_des = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await PastDesignations.findOne({
            _id: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};

//=============================================================================== Delete Past designation

exports.delete_Past_designation = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await PastDesignations.findOneAndDelete({
            _id: id,
        });
        return res.status(200).send("Deleted");
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};

//=============================================================================== Update Past designation

exports.update_Past_designation = async function (req, res, next) {

    console.log(req.body);
    try {
        const update = await PastDesignations.findOneAndUpdate({
            _id: req.body.id
        }, {
                title: req.body.title,
                affiliationNo: req.body.affiliationNo,
                MemNo: req.body.MemNo,
                Year: req.body.Year,
                updated_at: req.body.updated_at,
        }, {
            new: false
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//=============================================================================== Get spec affiliations Past designations

exports.get_spec_aff_Past_des = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await PastDesignations.find({
            affiliationNo: id
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};
