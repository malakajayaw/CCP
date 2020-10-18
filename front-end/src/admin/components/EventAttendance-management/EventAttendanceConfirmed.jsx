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
import {addEventAttendanceAttended} from "../../controllers/event.attendance.attended.controller";
import {deleteConfirmedMemebr, getConfirmedMembersForAnEvent} from "../../controllers/event.attendance.confirmed.controller";

function EventAttendanceConfirmed(props) {
  var { id } = useParams();
  console.log(id);

  const forceUpdate = useForceUpdate();

  async function Onsubmit (r)  {
    let data2 = {
      eventId:id, 
      responder:r,
    }
    console.log(data2);
   addEventAttendanceAttended(data2).then(response =>{

     console.log(response);
     if (response.code == 200) {
        loadData()
       Config.setToast("Attended Member Added Successfully");
       forceUpdate();
     }
   })
  };
  
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    getData(id);
  }, []);

  async function getData(id) {
    var res = await getConfirmedMembersForAnEvent(id);
    await setResponses(res.data.data);
    $("#eventattCTable").dataTable();
  }


 
  const loadData = () => {
    return responses.map((responses, index) => {
        return (
         <tr key={index} >
         <td name = {"responderT"+index}>{responses.responder}</td>
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
    const res = await deleteConfirmedMemebr(id);
    if (res.code == 200) {
      Config.setToast("Delete");
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
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
          <Link to = {"/Admin/EventAttendanceRegistered/"+id} type="button" className="btn btn-success btn-sm float-right add_btn mr-2 my-2">
              Registered Members
            </Link>
            <Link to = {"/Admin/EventAttendanceAttended"+id} type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">
              Attended Members
            </Link>
          <h5>Confirmed Members for the Event</h5>
            <table id="eventattCTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership No</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>
              {loadData()}
          </tbody>
          <tfoot>
          <tr>
                <th>Membership No</th>
                <th>Manage</th>
              </tr>
            </tfoot>
          
            </table>
          </div>
          
      </div>
      {/* <button type="button" onClick={() => {props.onClick("EventView"); }} className="btn btn-success float-right add_btn" >Save Changes</button> */}
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendanceConfirmed;