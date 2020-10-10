import React from 'react';
import {useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import ContentHeader from '../Dashboard/ContentHeader'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { get_event} from '../../controllers/event.controller';


function EventView(props) {

    const [event, setEvent] = useState({event:['']});
    let { eventId } = useParams();
    var i = 0;

    useEffect(() => {
      onLoadEvent(eventId);
  }, []); 
  
    const onLoadEvent = async (eventId) => {
      const result = await get_event(eventId);
      await  setEvent(result.data.data);
    }

  return (  <div>
    {/* <ContentHeader pageName={props.page}/> */}
    <section className="content" >
  <div className="card">
    <div className="card-header">
    <div className="row">
    <div className="col-6">
      <h3 className="card-title">Event Details</h3>
      </div>
      <div className="col-6">
      <Link to="/Admin/EventReportForm" type="button" className="btn btn-info float-right add_btn ml-2">Add Report</Link>
      <Link to="/Admin/EventAttendance" type="button" className="btn btn-success float-right add_btn">Add Attendance</Link>
      </div>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8 order-1 order-md-1">
        <div className="row">
        <img className="mb-4 shadow-lg bg-white rounded" alt="Event Banner" src={__dirname+"images/Events/"+event.banner} style={{float:"left", width:"100%", maxHeight:"300px" }}/>
     </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Date<i className="far fa-calendar-alt ml-2"></i></span>
                    <span className="info-box-number text-center text-muted mb-0">{(new Date(event.eventDate).toDateString())}</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Time<i className="far fa-clock ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">{event.startTime} to {event.endTime}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-sm-12">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Venue<i className="fas fa-map-marker-alt ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">{event.venue}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row info-box bg-light">
            <div className="col-12 px-4">
         
          <h3 className="text-primary mt-3 mb-3">{event.eventName} </h3>
          <div className="text-muted">
            <p className="text-md"><i className="fas fa-bullhorn"></i> <b>{event.hostingAffiliation}</b>
            </p>
          </div>
          <p className="text-muted">{event.description}</p>
          
          <h5 className="mt-2 text-muted">Event Volunteers</h5>
          <ul className="list-unstyled">

             <li className="text-secondary" >{event.volunteers}</li>

          </ul>    
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-4 order-2 order-md-2">
         <iframe src={event.formLink} title="registrationForm" width="100%"  height="100%" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
    {/* <!-- /.card-body --> */}
  </div>
  {/* <!-- /.card --> */}

</section>
</div>);
}

export default EventView;