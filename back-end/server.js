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


//======================================================================================================
//===================================import routes    =================================================
//======================================================================================================
const memberRoutes = require("./app/routes/member.route");
const eventRoutes = require("./app/routes/event.route");




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
 app.use(fileUpload());
mongoose.set("useCreateIndex", true);

//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
app.use("/member", memberRoutes);
app.use("/event", eventRoutes);


const upload = multer();

const fs = require("fs");
const { promisify } = require("util");
const pipeline  = promisify(require("stream").pipeline)


app.post("/upload", (req, res) => {
  // res.setHeader('Content-Type', 'application/json')
  //res.send("Hi");
//   if(req.files === null){
//     return res.status(400).json({msg:'No file uploaded'})
// }

// const file = req.files.banner;

// const {files} = req; 
// const fileName = files.banner.name;
// await pipeline(files.stream, fs.createWriteStream(`${__dirname}/./public/${fileName}`));

console.log(req);
if(req.files === null){
      return res.status(400).json({msg:'No file uploaded'})
  }

  const file = req.files.banner;
  file.mv(`${__dirname}/./public/${file.name}`,err => {if(err)console.log(err);return res.status(500).send(err)});

  res.json({fileName: file.name})

console.log(req.files.banner);
});


app.get("/events",(req,res) => {
    const events = [ 
        {eventId : "001", eventName : "How to Invest in Share Market", hostingAffiliation : "IEEE Young Professionals Sri Lanka", date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open",
         venue:"Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1",
         description: "YP LETs Talks is one of the key events of the IEEE Young Professionals Sri Lanka Section which brings together young professionals representing each and every domain of engineering",banner:"event1",
         eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"},
       
         {eventId : "002", eventName : "IEEE Sri Lanka Section AGM 2018", hostingAffiliation : "IEEE Sri Lanka Section",date : "Feb 7, 2018" ,time : "5:30 pm to 10:00 pm", status : "Open",
         venue:"Hilton Colombo Residences, 200 Union Place, Colombo 02",
         description:"All IEEE members (Graduate Student and above) of IEEE Sri Lanka Section are invited for the AGM and the fellowship dinner.",banner:"event2",
         eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"},
        
         {eventId : "003", eventName : "Cloud Study Jam 2018" , hostingAffiliation : "GDG Cloud Sri Lanka", date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed",
         venue:"Dialog Auditorium, Dr Colvin R de Silva Mw, Colombo",
         description:"Want to get started on the Google Cloud, but don't know where to begin?",banner:"event3",
         eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"}
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
    const event1 = [
      {eventId : "001", eventName : "How to Invest in Share Market", hostingAffiliation : "IEEE Young Professionals Sri Lanka", date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open",
     venue:"Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1",
     description: "YP LETs Talks is one of the key events of the IEEE Young Professionals Sri Lanka Section which brings together young professionals representing each and every domain of engineering",banner:"event1",
     eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"} ,
     ['Anuka Jaysundara','Prabhasha Amarathunga',' Maneesha Rajapaksha',' Malaka Jayawardena', 'Thimithi Weerathunga']
];

    const event2 = [
        {eventId : "002", eventName : "IEEE Sri Lanka Section AGM 2018", hostingAffiliation : "IEEE Sri Lanka Section",date : "Feb 7, 2018" ,time : "5:30 pm to 10:00 pm", status : "Open",
        venue:"Hilton Colombo Residences, 200 Union Place, Colombo 02",
        description:"All IEEE members (Graduate Student and above) of IEEE Sri Lanka Section are invited for the AGM and the fellowship dinner.",banner:"event2",
        eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"},
        ['Anuka Jaysundara','Prabhasha Amarathunga',' Maneesha Rajapaksha',' Malaka Jayawardena', 'Thimithi Weerathunga']
    ];
  
    const event3 = [
        {eventId : "003", eventName : "Cloud Study Jam 2018" ,
        hostingAffiliation : "GDG Cloud Sri Lanka", date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed",
        venue:"Dialog Auditorium, Dr Colvin R de Silva Mw, Colombo",
        description:"Want to get started on the Google Cloud, but don't know where to begin?",banner:"event3",
        eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"},
       ['Anuka Jaysundara','Prabhasha Amarathunga',' Maneesha Rajapaksha',' Malaka Jayawardena', 'Thimithi Weerathunga']
    ];

    if(req.params.id === "5f58625c6dc02c13b45d7f6d")
        res.json(event1);
    else if(req.params.id == 002)
        res.json(event2);
    else if(req.params.id == 003)
        res.json(event3);
});

app.post("/addEvent", cors(), (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  console.log("Add Event");
  console.log(req.body);
  res.json({ stat: 'good' });
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