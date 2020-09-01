const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//app.use(express.static('public'));
app.use(express.json());
//app.use(express.bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser.json());

app.get("/events",(req,res) => {
    const events = [
        {eventId : 1, eventName : 'How to Invest in Share Market', hostingAffiliation : 'IEEE Young Professionals Sri Lanka',date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open"},
        {eventId : 2, eventName : 'IEEE Sri Lanka Section AGM 2018', hostingAffiliation : 'IEEE Sri Lanka Section',date : "Feb 7, 2018" ,time : "5:30 pm to 10:00 pm", status : "Open"},
        {eventId : 3, eventName : 'Cloud Study Jam 2018', hostingAffiliation : 'GDG Cloud Sri Lanka',date : "January 13, 2018" ,time : "9:00 am to 3:30 pm", status : "Closed"}
    ];
    res.json(events);
    //console.log(req.body);
});


app.post("/malaka", (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    //res.send("Hi");
    console.log(req.body);
    res.json({stat: 'good'});
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