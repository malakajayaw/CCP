const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');
const multer = require("multer");


const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;

const memberRoutes = require("./app/routes/member.route");
const eventRoutes = require("./app/routes/event.route");
const eventReport = require("./app/routes/event.report.route");
const activity = require("./app/routes/activity.route");
const designations = require("./app/routes/designations.route");
const assignments = require("./app/routes/designationsAss.route");
const affiliation = require("./app/routes/affiliation.route");



//======================================================================================================
//===================================import config files ===============================================
//======================================================================================================

// import db
const dbConfig = require("./app/config/db.config");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(fileUpload());
mongoose.set("useCreateIndex", true);

//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
app.use("/member", memberRoutes);
app.use("/event", eventRoutes);
app.use("/eventReport", eventReport);
app.use("/activity", activity);
app.use("/designations", designations);
app.use("/assignments", assignments);
app.use("/affiliation", affiliation)


app.post("/addAffiliation", cors(), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    //res.send("Hi");
    console.log("Add Affiliation");
    console.log(req.body);
    res.json({ stat: 'good' });
});
app.get("/affiliation", (req, res) => {
    const affiliation = [
        { affiliationId: 1, affiID: '001', affiliationtype: 'Student Branch', affiliationname: "UOC", affiliationno: "IEEE001", date: "March 27, 2018", status: "Available" },
        { affiliationId: 2, affiID: '002', affiliationtype: 'Women In Engineering', affiliationname: "SLIIT", affiliationno: "IEEE002", date: "Feb 7, 2018", status: "Available" },
        { affiliationId: 3, affiID: '003', affiliationtype: 'Young Professionals', affiliationname: "UOP", affiliationno: "IEEE003", date: "January 13, 2018", status: "Not Available" }
    ];
    res.json(affiliation);
    //console.log(req.body);
});
app.get("/deleteAffiliations/:id", (req, res) => {
    console.log("Affiliation Deleted");
    console.log(req.params.id);
});

//======================================================================================================
//================================== Handlle Error     ===========================================
//======================================================================================================

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    console.log(error);

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});


//======================================================================================================
//=================================== critical functions     ===========================================
//======================================================================================================

// Connecting to the database
mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to the database now");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });



app.listen(port, () => {console.log('Server started on port '+port);});