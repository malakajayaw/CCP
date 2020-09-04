const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;

<<<<<<< HEAD

//======================================================================================================
//===================================import routes    =================================================
//======================================================================================================
const memberRoutes = require("./app/routes/member.route");




//======================================================================================================
//===================================import config files ===============================================
//======================================================================================================

// import db
const dbConfig = require("./app/config/db.config");

//======================================================================================================
//===================================open apps services  ===============================================
//======================================================================================================
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
mongoose.set("useCreateIndex", true);

//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
app.use("/member", memberRoutes);


//======================================================================================================
//================================== Handlle Error     ===========================================
//======================================================================================================


=======
//app.use(express.static('public'));
app.use(cors());
app.use(express.json());
//app.use(express.bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser.json());
>>>>>>> DesignationManagement_2_Malaka

app.get("/events",(req,res) => {
    const events = [
        {eventId : 1, eventName : 'How to Invest in Share Market', hostingAffiliation : 'IEEE Young Professionals Sri Lanka',date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open"},
        {eventId : 2, eventName : 'IEEE Sri Lanka Section AGM 2018', hostingAffiliation : 'IEEE Sri Lanka Section',date : "Feb 7, 2018" ,time : "5:30 pm to 10:00 pm", status : "Open"},
        {eventId : 3, eventName : 'Cloud Study Jam 2018', hostingAffiliation : 'GDG Cloud Sri Lanka',date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed"}
    ];
    res.json(events);
    //console.log(req.body);
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

app.get("/EventView/:id", (req, res) => {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    console.log(req.params.id);
    const event = [
        {eventId : 3, eventName : 'Cloud Study Jam 2018', hostingAffiliation : 'GDG Cloud Sri Lanka',date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed"}
    ];
    res.json(event);
});

app.get("/contact",(req,res) => {res.send("Contact me at anuka@GMAIL.COM");});

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