import React from 'react';
import {useParams } from "react-router-dom";
import { useState,useEffect } from 'react';

function EventView() {

    const [event, setEvent] = useState({event : ['','']});
    let { eventId } = useParams();
    var i = 0;
    var volunteers = [];

    useEffect(() => {
      fetch('/EventView/'+eventId)
      .then(res => res.json())
      .then(event => setEvent({event}));
    } ,[] );

    function volList(){
      for(i = 0 ; i < event.event[1].length ; i++){
        volunteers.push(event.event[1][i]);
      }
    }

  return ( <section className="content" >
  <div className="card">
    <div className="card-header">
    <div className="row">
    <div className="col-6">
      <h3 className="card-title">Event Details</h3>
      </div>
      <div className="col-6">
      <button type="button"  onClick={() => {this.props.onClick("EReport"); }}  className="btn btn-info float-right add_btn ml-2">Add Report</button>
      <button type="button"  onClick={() => {this.props.onClick("EAttendance"); }}  className="btn btn-success float-right add_btn">Add Attendance</button> 
      </div>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8 order-1 order-md-1">
        <img className="mb-4 shadow-lg bg-white rounded" alt="Event Banner" src={__dirname+"images/Events/"+event.event[0].banner+".jpg"} style={{float:"left", maxWidth:"100%", maxHeight:"300px" }}/>
     
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Date<i className="far fa-calendar-alt ml-2"></i></span>
                    <span className="info-box-number text-center text-muted mb-0">{event.event[0].date}</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Time<i className="far fa-clock ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">{event.event[0].time}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-sm-12">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Venue<i className="fas fa-map-marker-alt ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">{event.event[0].venue}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row info-box bg-light">
            <div className="col-12 px-4">
         
          <h3 className="text-primary mt-3 mb-3">{event.event[0].eventName} </h3>
          <div className="text-muted">
            <p className="text-md"><i className="fas fa-bullhorn"></i> <b>{event.event[0].hostingAffiliation}</b>
            </p>
          </div>
          <p className="text-muted">{event.event[0].description}</p>
          
          <h5 className="mt-2 text-muted">Event Volunteers</h5>
          <ul className="list-unstyled">

          { volList() }
          { volunteers.map((volunteer,index) =>
             <li className="text-secondary" key={index}>{volunteer}</li>) } 

          </ul>    
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-4 order-2 order-md-2">
         <iframe src={event.event[0].eventForm} title="registrationForm" width="100%"  height="100%" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
    {/* <!-- /.card-body --> */}
  </div>
  {/* <!-- /.card --> */}

</section>);
}

export default EventView;