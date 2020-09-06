import React from 'react';
import {  Link } from "react-router-dom";

function AllEvents() {
    return (<div className="container mt-5" >

        <h1 className="text-center text-danger">ALL EVENTS</h1>
        <p className="text-center">These are all open and closed events of the organization. Click on an event to view more details.</p>

        <div className="row row-cols-1 row-cols-md-2">
  <div className="col">

   <Link to="/view/001"  className="closed-event-card" style={{display:"block"}} >
    <div className="card mt-5">
      <div className="view closed-event-img">
        <img className="card-img-top" src="images/Events/event1.jpg"
          alt="Card image cap" />
      </div>
      <div className="card-body">
        <h4 className="card-title">How to Invest in Share Market</h4>
        <hr className="hr-dark mt-4"/>
        <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Mar 27,2018
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1
    </div>
  </div>
      </div>

    </div>
    </Link>
  </div>

  <div className="col">

<a style={{display:"block"}} className="closed-event-card" href="http://justinbieber.com">
  <div className="card mt-5">
    <div className="view">
      <img className="card-img-top closed-event-img" src="images/Events/event2.jpg"
        alt="Card image cap" />
    </div>
    <div className="card-body">
      <h4 className="card-title">IEEE Sri Lanka Section AGM 2018</h4>
      <hr className="hr-dark mt-4"/>
      <div className="row">
  <div className="col-2 event-card-text">
      <i className="far fa-calendar-alt mr-2"></i>Feb 7,2018
  </div>
  <div className="col-9 event-card-text">
      <i className="fas fa-map-marker-alt mr-2"></i>Hilton Colombo Residences, 200 Union Place, Colombo 02
  </div>
</div>
    </div>

  </div>
  </a>
</div>
  
</div>


<div className="row row-cols-1 row-cols-md-2">
  <div className="col">

  <a style={{display:"block"}} className="closed-event-card" href="http://justinbieber.com">
    <div className="card mt-5 ">
      <div className="view">
        <img className="card-img-top closed-event-img" src="images/Events/event3.jpg"
          alt="Card image cap" />
      </div>
      <div className="card-body">
        <h4 className="card-title">Cloud Study Jam 2018</h4>
        <hr className="hr-dark mt-4"/>
        <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Jan 13,2018
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Dialog Auditorium, Dr Colvin R de Silva Mw, Colombo
    </div>
  </div>
      </div>

    </div>
    </a>
  </div>

  <div className="col">

  <a style={{display:"block"}} className="closed-event-card" href="http://justinbieber.com">
    <div className="card mt-5">
      <div className="view closed-event-img">
        <img className="card-img-top" src="images/Events/event1.jpg"
          alt="Card image cap" />
      </div>
      <div className="card-body">
        <h4 className="card-title">How to Invest in Share Market</h4>
        <hr className="hr-dark mt-4"/>
        <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Mar 27,2018
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1
    </div>
  </div>
      </div>

    </div>
    </a>
  </div>
  
</div>


<div className="row row-cols-1 row-cols-md-2">
  <div className="col">

  <a style={{display:"block"}} className="closed-event-card" href="http://justinbieber.com">
    <div className="card mt-5">
      <div className="view closed-event-img">
        <img className="card-img-top" src="images/Events/event1.jpg"
          alt="Card image cap" />
      </div>
      <div className="card-body">
        <h4 className="card-title">How to Invest in Share Market</h4>
        <hr className="hr-dark mt-4"/>
        <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Mar 27,2018
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1
    </div>
  </div>
      </div>

    </div>
    </a>
  </div>

  <div className="col">

<a style={{display:"block"}} className="closed-event-card" href="http://justinbieber.com">
  <div className="card mt-5">
    <div className="view">
      <img className="card-img-top closed-event-img" src="images/Events/event2.jpg"
        alt="Card image cap" />
    </div>
    <div className="card-body">
      <h4 className="card-title">IEEE Sri Lanka Section AGM 2018</h4>
      <hr className="hr-dark mt-4"/>
      <div className="row">
  <div className="col-2 event-card-text">
      <i className="far fa-calendar-alt mr-2"></i>Feb 7,2018
  </div>
  <div className="col-9 event-card-text">
      <i className="fas fa-map-marker-alt mr-2"></i>Hilton Colombo Residences, 200 Union Place, Colombo 02
  </div>
</div>
    </div>

  </div>
  </a>
</div>
  
</div>
        </div>
    );
 }

export default AllEvents;
