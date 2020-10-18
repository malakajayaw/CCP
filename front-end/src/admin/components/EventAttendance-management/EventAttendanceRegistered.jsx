import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import {get_responses} from "../../controllers/event.controller";
import {deleteRegisteredMember} from "../../controllers/event.attendance.confirmed.controller";
import {addEventAttendanceConfirmed} from "../../controllers/event.attendance.confirmed.controller";
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
  const forceUpdate = useForceUpdate();
  var { id } = useParams();
  console.log(id);
  
  async function Onsubmit (r)  {
    let data2 = {
      eventId:id, 
      responder:r,
    }
    console.log(data2);
   addEventAttendanceConfirmed(data2).then(response =>{

     console.log(response);
     if (response.code == 200) {
      loadData();
       Config.setToast("Confirmed Member Added Successfully");
       forceUpdate();
       
     }
   })
  };
  

  const [responses, setResponses] = useState([]);
  useEffect(() => {
    getData(id);
  }, []);

  async function getData(id) {
    var res = await get_responses(id);
    await setResponses(res.data.data);
    $("#eventattTable").dataTable();
  }

  const loadData = () => {
    return responses.map((responses, index) => {
        return (
         <tr key={index} >
         <td name = {"responderT"+index} handle>{responses.responder}</td>
         <td className="project-actions text-center">   
         {/* to={`/Admin/EventReportView/${eventreport._id}`}   */}
         {/* <Link to={`/Admin/EventAttendanceRegistered/${responses.responder}/${id}`} className="btn btn-primary btn-sm mr-1" style={{ color: "black" }}><i className="fas fa-pencil-alt mr-1" />Accept</Link> */}
        <a className="btn btn-info btn-sm mr-1" onClick = {(r)=> Onsubmit(responses.responder)} >  <i className="fas fa-pencil-alt mr-1"/>Accept </a>
        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(responses.responder)}> <i className="fas fa-trash mr-1"/>Decline</a>       
        </td>
    </tr>
      );
    }); 
  };

  const delete_func = async (id) => {
    const res = await deleteRegisteredMember(id);
    if (res.code == 200) {
      Config.setToast("Report Delete");
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
          <Link to = {"/Admin/EventAttendanceConfirmed/"+id} type="button" className="btn btn-success btn-sm float-right add_btn mr-2 my-2">
              Confirmed Members
            </Link>
            <Link to = {"/Admin/EventAttendanceAttended/"+id} type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">
              Attended Members
            </Link>
          <h5>Registered Members for the Event</h5>
            <table id="eventattTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership Number</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>

            {loadData()}
          
          </tbody>
          <tfoot>
          <tr>
                <th>Membership Number</th>
                <th>Manage</th>
              </tr>
            </tfoot>
          
            </table>
          </div>
          
      </div>
       {/* <button type="submit" className="btn btn-success float-right add_btn" onclick = {onClick()} >Save Changes</button>  */}
      </div>   
    </section>
    );
}



export default EventAttendanceRegistered;