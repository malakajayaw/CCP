import React from 'react';
import { Link } from 'react-router-dom';
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
import { useState ,useEffect} from 'react';
//importing the controller and the methods
import {getAttendedMembersForAnEvent} from "../../controllers/event.attendance.attended.controller";

  
function EventAttendanceAttended(props) {
  //getting the parameters
  let { id } = useParams();
  console.log(id);

  const [responses, setResponses] = useState([]);
  useEffect(() => {
    getData(id);
  }, []);

  //getData function is used to get the attended members from the db
  async function getData(id) {
    var res = await getAttendedMembersForAnEvent(id);
    await setResponses(res.data.data);
    $("#eventATable").dataTable();
  }

  //loadData function is used to load the data into the table
  const loadData = () => {
    return responses.map((responses, index) => {
        return (
         <tr key={index} >
          <td>{index+1}</td>
          <td name = {"responderT"+index}>{responses.responder}</td>
        </tr>
      );
    }); 
  };

  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
          </div>
          <div className="card-body">
          <Link to = {"/Admin/EventAttendanceRegistered/"+id} type="button" className="btn btn-success btn-sm float-right add_btn mr-2 my-2">Registered Members</Link>
          <Link to = {"/Admin/EventAttendanceConfirmed/"+id} type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">Confirmed Members</Link>

          <h5>Attended Members for the Event</h5>
            <table id="eventATable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>No :</th>
                <th>Membership No</th>
              </tr>
              </thead>
              <tbody>
                {/* calling the method to load the data to the table */}
                {loadData()}
              </tbody>
              <tfoot>
              <tr>
                <th>No :</th>
                <th>Membership No</th>
              </tr>
              </tfoot>
            </table>
          </div>
      </div>
      </div>   
    </section>
    );
}


export default EventAttendanceAttended;