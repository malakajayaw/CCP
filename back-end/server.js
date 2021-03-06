const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer({ dest: "uploads/profilepic/" });
const fileUpload = require('express-fileupload');


const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;

const memberRoutes = require("./app/routes/member.route");
const eventRoutes = require("./app/routes/event.route");
const eventAttendanceRoutes = require("./app/routes/event.attendance.route");
const eventReport = require("./app/routes/event.report.route");
const activity = require("./app/routes/activity.route");
const designations = require("./app/routes/designations.route");
const affiliation = require("./app/routes/affiliation.route");
const affiliationview = require("./app/routes/affiliationview.route");
const pastdes = require("./app/routes/pastdes.route");
const admin = require("./app/routes/admin.route");



//======================================================================================================
//===================================import config files ===============================================
//======================================================================================================

// import db
const dbConfig = require("./app/config/db.config");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
mongoose.set("useCreateIndex", true);

//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
app.use("/assets", express.static("app/public"));
app.use("/member", memberRoutes);
app.use(fileUpload());
app.use("/event", eventRoutes);
app.use("/eventReport", eventReport);
app.use("/eventattendance", eventAttendanceRoutes);
app.use("/activity", activity);
app.use("/designations", designations);
app.use("/affiliation", affiliation);
app.use("/affiliationview", affiliationview);
app.use("/pastdes", pastdes);
app.use("/admin", admin);

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
app.listen(port, () => { console.log('Server started on port ' + port); });