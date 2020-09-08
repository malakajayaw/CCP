import React from 'react';
import {  Link } from "react-router-dom";
import Carousel from './Carousel';
import ClosedEvents from './ClosedEvents';

function UpcomingEvents() {
    return (
      <div>
    <Carousel />
    <div className="container" style={{marginTop:"5rem"}}>
        <h1 style={{color:"#1DA1F2"}} className="text-center">UPCOMING EVENTS</h1>
        <p className="text-center">These are the upcoming events of the organization. Click on an event to view more details and register.</p>

        <Link to="/view/001" style={{display:"block"}} >
      <div className="card d-flex mt-5 justify-content-center event-card " >
          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event4.jpg" alt="Card image cap"/>
         
          <div className="card-body event-card-body">
            <h4 className="card-title">Congress 2019</h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Sep 30,2020
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Bandaranayake Memorial International Conference Hall, Bauddhaloka Mawatha, Colombo 00700
    </div>
  </div>
          </div>
        </div>
        </Link>

        <a style={{display:"block"}} href="http://justinbieber.com">
      <div className="card d-flex mt-5 justify-content-center event-card" >
          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event5.jpg" alt="Card image cap"/>
          
          <div className="card-body event-card-body">
            <h4 className="card-title">Inspire SL</h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Octorber 06,2020
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>The Kingsbury Hotel, 48, Janadhipathi Mawatha, Colombo 01
    </div>
  </div>
          </div>
        </div>
        </a>

        <a style={{display:"block"}} href="http://justinbieber.com">

      <div className="card d-flex mt-5 justify-content-center event-card" >

          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event6.jpg" alt="Card image cap"/>
         
    
          <div className="card-body event-card-body">
            <h4 className="card-title">IEEE Innovation Nation</h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div className="row">
    <div className="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Nov 15,2020
    </div>
    <div className="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>On Golden Pond of Taj Samudra, Colombo
    </div>
  </div>
          </div>
        </div>
        </a>

        <div className="row">
    <div className="col text-center">
        <Link to="/upcomingAll" className="btn btn-outline-primary waves-effect mt-5 mb-5" >All Upcoming Events</Link>
    </div>
    </div>
        </div>
        <ClosedEvents />
        </div>
        
    );
 }

export default UpcomingEvents;
