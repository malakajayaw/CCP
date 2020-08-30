const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/events",(req,res) => {
    const events = [
        {id : 1, fName : 'Anuka', lName : 'Jayasundara'},
        {id : 2, fName : 'Maneesha', lName : 'Rajapaksha'},
        {id : 3, fName : 'Prabhasha', lName : 'Amarathunga'}
    ];
    res.json(events);
});

app.get("/contact",(req,res) => {res.send("Contact me at anuka@GMAIL.COM");});

app.listen(port, () => {console.log('Server started on port '+port);});