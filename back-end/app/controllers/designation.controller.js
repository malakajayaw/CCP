const Designation = require('../model/designations.model');
const Member = require('../model/member.model');
const Affiliation = require('../model/affiliation.model');

//=============================================================================== Add Designation

exports.addDesignation = function (req, res, next) {

    let new_designation = Designation({
        title: req.body.title,
        affiliationNo: req.body.affiliationNo,
        type: req.body.type,
        MemNo: "",
        updated_at: req.body.updated_at,
    });

    //save event  
    new_designation.save(function (err) {
        if (err) {
            return next(err);
        }
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

//=============================================================================== Get aff spec designations

exports.get_aff_spec_des = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Designation.find({
            affiliationNo: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};

//=============================================================================== Get spec designations

exports.get_spec_des = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Designation.findOne({
            _id: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
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

//=============================================================================== Update designation

exports.update_designation = async function (req, res, next) {

    try {
        const update = await Designation.findOneAndUpdate({
            _id: req.body.id
        }, {
            title: req.body.title,
            affiliationNo: req.body.affiliationNo,
            type: req.body.type,
        }, {
            new: false
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//=============================================================================== Update designation Member

exports.update_designation_mem = async function (req, res, next) {

    try {
        const update = await Designation.findOneAndUpdate({
            _id: req.body.id
        }, {
            MemNo: req.body.MemNo,
        }, {
            new: false
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//=============================================================================== remove designation Member

exports.remove_designation_mem = async function (req, res, next) {

    try {
        const update = await Designation.findOneAndUpdate({
            _id: req.body.id
        }, {
            MemNo: "",
        }, {
            new: false
        })

        return res.status(200).send("Update");
    } catch (error) {
        return res.status(403).send("Something went wrong");
    }

}

//=============================================================================== get all members


exports.get_all_members = function (req, res, next) {
    // check userdata
    Member.find(function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No members found')
        }
    })
}

//=============================================================================== get members for aff

exports.get_aff_spec_members = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Member.find({
            affiID: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};

//=============================================================================== get spec member

exports.get_spec_mem = async function (req, res, next) {
    var id = req.body.id;
    try {
        const log = await Member.findOne({
            _id: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};

//=============================================================================== Get spec number of affs

exports.get_no_aff_type = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Affiliation.count({
            affiliationtype: id,
            status: "Available"
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong in get_spec_des");
    }
};

//=============================================================================== get active members count

exports.get_active_members_count = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Member.count({
            state: true,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};

//=============================================================================== get all members count

exports.get_all_members_count = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Member.count({

        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};

//=============================================================================== get pending member request count

exports.get_request_members_count = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Member.count({
            newrequest: true,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};