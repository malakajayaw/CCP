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



app.get("/designations", (req, res) => {
    console.log("designations got request");
    const des = [
        { desId: 1, branchName: 'SB 1', branchid: 1, desTitle: 'Secretary'},
        { desId: 2, branchName: 'SB 2', branchid: 2, desTitle: '	Cordinator'},
        { desId: 3, branchName: 'SB 3', branchid: 3, desTitle: 'Treasurer'}
    ];
    res.json(des);
});


app.get("/deleteDesignations/:id", (req, res) => {
    console.log("designation deleted");
    console.log(req.params.id);
});

app.get("/assigndesignations", (req, res) => {
    const assd = [
        { assdId: 1, dTitle: 'Secretary', dMem: 'Malaka Jayawardhana'},
        { assdId: 2, dTitle: 'Treassurer', dMem: 'Anuka Jayasundara'},
        { assdId: 3, dTitle: 'Cordinator', dMem: 'Maneesha Rajapakshe'}
    ];
    res.json(assd);
});

app.get("/activitylog", (req, res) => {
    const actl = [
        { actId: 1, editId: '0124', activity: 'Insert', table: 'Member', date:'02/10/2020 18:10:04',param:'Nimal' },
        { actId: 2, editId: '0136', activity: 'Delete', table: 'Event', date: '02/10/2020 18:10:04', param: 'SLIIT IEEE Con' },
        { actId: 3, editId: '0175', activity: 'Update', table: 'Affiliation', date: '02/10/2020 18:10:04', param: 'SLIIT SB' }
    ];
    res.json(actl);
});

app.post("/editAssignedMem",cors(), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    //res.send("Hi");
    console.log("Edit Assign Mem");
    console.log(req.body);
    res.json({stat: 'good'});
});

app.post("/editDesignation", cors(), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    //res.send("Hi");
    console.log("Edit Designation");
    console.log(req.body);
    res.json({ stat: 'good' });
});

app.post("/createDesignation", cors(), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    //res.send("Hi");
    console.log("Create Designation");
    console.log(req.body);
    res.json({ stat: 'good' });
});


app.post("/addAffiliation", cors(), (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  //res.send("Hi");
  console.log("Add Affiliation");
  console.log(req.body);
  res.json({ stat: 'good' });
});
app.get("/affiliation",(req,res) => {
  const affiliation = [
      {affiliationId : 1, affiID : '001', affiliationtype : 'Student Branch', affiliationname:"UOC" ,  affiliationno: "IEEE001"  , date : "March 27, 2018" , status : "Available"},
      {affiliationId : 2, affiID : '002', affiliationtype : 'Women In Engineering',affiliationname:"SLIIT" ,affiliationno: "IEEE002"  , date : "Feb 7, 2018" , status : "Available"},
      {affiliationId : 3, affiID : '003', affiliationtype : 'Young Professionals',affiliationname:"UOP" ,affiliationno: "IEEE003"  , date : "January 13, 2018" , status : "Not Available"}
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