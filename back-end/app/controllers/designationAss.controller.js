
const Assignments = require('../model/designationAssignments.model');

exports.addAssignment = function (req, res, next) {

    let new_assignment = Assignments({
        AssNo: req.body.AssNo,
        DesNo: req.body.DesNo,
        title: req.body.title,
        MemNo: req.body.MemNo,
        forYear: req.body.forYear,
        AssBy: req.body.AssBy,
        updated_at: req.body.updated_at,
        created_at: req.body.created_at,
        state: req.body.state
    });
    console.log(new_assignment);

    //save event  
    new_assignment.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("Assigned successfully ");
        res.status(201).send('Assigned Successfully');
    })


}

exports.get_all_assignments = function (req, res, next) {
    // check userdata
    Assignments.find(function (err, docs) {
        if (docs.length != 0) {
            res.status(200).send({
                data: docs
            });
        } else {
            res.status(403).send('No data found')
        }
    })
}

exports.delete_assignment = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Assignments.findOneAndDelete({
            _id: id,
        });
        return res.status(200).send("Deleted");
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};

exports.get_spec_ass = async function (req, res, next) {
    var id = req.body.id;

    try {
        const log = await Assignments.findOne({
            _id: id,
        });
        return res.status(200).send({
            data: log,
        });
    } catch (error) {
        return res.status(405).send("Something went wrong");
    }
};
