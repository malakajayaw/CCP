import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import {get_responses} from "../../controllers/event.controller";
import {delete_registered_member} from "../../controllers/event.attendance.registered.controller";
import { useParams } from "react-router-dom";
import Config from "../../controllers/config.controller";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery"
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import useForceUpdate from "use-force-update";

 
function EventAttendanceRegistered(props) {
  //getting the parameters
  var { id } = useParams();
  
  //Onsubmit function used by the accept button in the table
  async function Onsubmit (r)  {
    let data2 = {
      eventId:id, 
      responder:r,
    }
    //calling the method in the controller
    addEventAttendanceConfirmed(data2).then(response =>{
     if (response.code == 200) {
      //loading the table again
      getData(id);
      loadData();
      Config.setToast("Confirmation email sent Successfully");
      Config.setToast("Confirmed Member Added Successfully");
     }
    })
  };

  //setting the responses
  const [responses, setResponses] = useState([]);
  useEffect(() => {//1
    getData(id);
  }, []);

  async function getData(id) {
    var res = await get_responses(id);//getresponsesbyid (event id)
    await setResponses(res.data.data);
    $("#eventattTable").dataTable();
  }

  //loadData function is used to load the data into the table
  const loadData = () => {
    return responses.map((responses, index) => {
        return (
         <tr key={index} >
         <td>{responses.responder}</td>
    </tr>
      );
    }); 
  };

  const loadData2 = () => {//2
    return responses.map((responses, index) => {//responses response
        return (
          <tr key={index} >
          <td className="project-actions text-center">    
                <a className="btn btn-info btn-sm mr-1" >  <i className="fas fa-pencil-alt mr-1"/>Accept </a>
                <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(index)}> <i className="fas fa-trash mr-1"/>Decline</a>
        </td>
    </tr>
      );
    }); 
  };

  const delete_func = async (id) => {
    const res = await delete_registered_member(id);
    if (res.code == 200) {
      Config.setToast("Registered Member Declined!");
      forceUpdate();
    } else {
      Config.setToast("Something went wrong");
      forceUpdate();
    }
  };

  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
          </div>
          <div className="card-body">
          <Link to = "/Admin/EventAttendanceConfirmed" type="button" className="btn btn-success btn-sm float-right add_btn mr-2 my-2">
              Confirmed Members
            </Link>
            <Link to = "/Admin/EventAttendanceAttended" type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">
              Attended Members
            </Link>
          <h5>Registered Members for the Event</h5>
            <table id="eventattTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>No : </th>
                <th>Membership Number/ Email</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>
                {/* calling the method to get the data in to the table view */}
                {loadData()}
              </tbody>
              <tfoot>
              <tr>
                <th>No : </th>
                <th>Membership Number / Email</th>
                <th>Manage</th>
              </tr>
            </tfoot>
          
            </table>
          </div>
          
      </div>
      <button type="button" onClick={() => {props.onClick("EventView"); }} className="btn btn-success float-right add_btn" >Save Changes</button>
      </div>   
    </section>
    );
}


export default EventAttendanceRegistered;