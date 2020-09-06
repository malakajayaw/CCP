import React from 'react';

function Upcomming() {
    return (<div className="container" style={{marginTop:"7rem"}}>

        <h1 style={{color:"#1DA1F2"}} className="text-center">UPCOMING EVENTS</h1>
        <p className="text-center">These are the upcoming events of the organization. Click on an event to view more details and register.</p>

        <a style={{display:"block"}} href="http://justinbieber.com">
      <div className="card d-flex mt-5 justify-content-center event-card" >
          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event4.jpg" alt="Card image cap"/>
          <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
          <div className="card-body event-card-body">
            <h4 className="card-title"><a>Congress 2019</a></h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div class="row">
    <div class="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Sep 30,2020
    </div>
    <div class="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>Bandaranayake Memorial International Conference Hall, Bauddhaloka Mawatha, Colombo 00700
    </div>
  </div>
          </div>
        </div>
        </a>

        <a style={{display:"block"}} href="http://justinbieber.com">
      <div className="card d-flex mt-5 justify-content-center event-card" >
          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event5.jpg" alt="Card image cap"/>
          <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
          <div className="card-body event-card-body">
            <h4 className="card-title"><a>Inspire SL</a></h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div class="row">
    <div class="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Octorber 06,2020
    </div>
    <div class="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>The Kingsbury Hotel, 48, Janadhipathi Mawatha, Colombo 01
    </div>
  </div>
          </div>
        </div>
        </a>

        <a style={{display:"block"}} href="http://justinbieber.com">
      <div className="card d-flex mt-5 justify-content-center event-card" >
          <img className="card-img-top h-75 d-inline-block event-card-img" src="images/events/event6.jpg" alt="Card image cap"/>
          <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
          <div className="card-body event-card-body">
            <h4 className="card-title"><a>IEEE Innovation Nation</a></h4>
            <hr className="hr-dark mt-4"/>
            {/* <p className="card-text" >Some quick e.</p> */}
            <div class="row">
    <div class="col-2 event-card-text">
        <i className="far fa-calendar-alt mr-2"></i>Nov 15,2020
    </div>
    <div class="col-9 event-card-text">
        <i className="fas fa-map-marker-alt mr-2"></i>On Golden Pond of Taj Samudra, Colombo
    </div>
  </div>
          </div>
        </div>
        </a>
        <div class="row">
    <div class="col text-center">
        <button type="button" className="btn btn-outline-primary waves-effect">All Upcoming Events</button>
    </div>
    </div>
        </div>
    );
 }

export default Upcomming;
