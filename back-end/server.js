const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

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
});

app.get("/EventView/:id",(req,res) => {
    const event1 = [
        {eventId : "001", eventName : "How to Invest in Share Market", hostingAffiliation : "IEEE Young Professionals Sri Lanka", date : "March 27, 2018" ,time : "5:30 pm to 8:30 pm", status : "Open",
        venue:"Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1",
        description: "YP LETs Talks is one of the key events of the IEEE Young Professionals Sri Lanka Section which brings together young professionals representing each and every domain of engineering",banner:"event1",
        eventForm : "https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true"},
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

    if(req.params.id == 001)
        res.json(event1);
    else if(req.params.id == 002)
        res.json(event2);
    else if(req.params.id == 003)
        res.json(event3);
});

app.get("/contact",(req,res) => {res.send("Contact me at anuka@GMAIL.COM");});

app.listen(port, () => {console.log('Server started on port '+port);});