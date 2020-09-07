const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/events",(req,res) => {
    const events = [
        {eventId : 1, eventName : 'How to Invest in Share Market', hostingAffiliation : 'IEEE Young Professionals Sri Lanka',date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open"},
        {eventId : 2, eventName : 'IEEE Sri Lanka Section AGM 2018', hostingAffiliation : 'IEEE Sri Lanka Section',date : "Feb 7, 2018" ,time : "5:30 pm to 10:00 pm", status : "Open"},
        {eventId : 3, eventName : 'Cloud Study Jam 2018', hostingAffiliation : 'GDG Cloud Sri Lanka',date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed"}
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
    res.json(event);
});

app.get("/contact",(req,res) => {res.send("Contact me at anuka@GMAIL.COM");});

app.listen(port, () => {console.log('Server started on port '+port);});