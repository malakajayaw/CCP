const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");


const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 5000;

//app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
mongoose.set("useCreateIndex", true);

//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
//app.use("/member", memberRoutes);


//======================================================================================================
//================================== Handlle Error     ===========================================
//======================================================================================================



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

app.get("/designations", (req, res) => {
    console.log("designations got request");
    const des = [
        { desId: 1, branchName: 'SB 1', branchid: 1, desTitle: 'Secretary'},
        { desId: 2, branchName: 'SB 2', branchid: 2, desTitle: '	Cordinator'},
        { desId: 3, branchName: 'SB 3', branchid: 3, desTitle: 'Treasurer'}
    ];
    res.json(des);
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

app.get("/EventView/:id", (req, res) => {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    console.log(req.params.id);
    const event = [
        {eventId : 3, eventName : 'Cloud Study Jam 2018', hostingAffiliation : 'GDG Cloud Sri Lanka',date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed"}
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

    if(req.params.id == 001)
        res.json(event1);
    else if(req.params.id == 002)
        res.json(event2);
    else if(req.params.id == 003)
        res.json(event3);
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
//mongoose
//  .connect(dbConfig.url, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  })
//  .then(() => {
//    console.log("Successfully connected to the database now");
//  })
//  .catch((err) => {
//    console.log("Could not connect to the database. Exiting now...", err);
//    process.exit();
//  });




app.listen(port, () => {console.log('Server started on port '+port);});