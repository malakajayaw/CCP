const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;


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



app.get("/events",(req,res) => {
    const events = [
        {id : 1, fName : 'Anuka', lName : 'Jayasundara'},
        {id : 2, fName : 'Maneesha', lName : 'Rajapaksha'},
        {id : 3, fName : 'Prabhasha', lName : 'Amarathunga'}
    ];
    res.json(events);
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