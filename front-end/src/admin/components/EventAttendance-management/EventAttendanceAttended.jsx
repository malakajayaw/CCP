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
import {getAttendedMembersForAnEvent, deleteAttendedMemeber} from "../../controllers/event.attendance.attended.controller";

  
function EventAttendanceAttended(props) {
  let { id } = useParams();
  console.log(id);

  const forceUpdate = useForceUpdate();

  const [responses, setResponses] = useState([]);
  useEffect(() => {
    getData(id);
  }, []);

  async function getData(id) {
    var res = await getAttendedMembersForAnEvent(id);
    await setResponses(res.data.data);
    $("#eventattCTable").dataTable();
  }


 
  const loadData = () => {
    return responses.map((responses, index) => {
        return (
         <tr key={index} >
         <td name = {"responderT"+index}>{responses.responder}</td>
         <td className="project-actions text-center">   
        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(responses.responder)}> <i className="fas fa-trash mr-1"/>Decline</a>       
        </td>
    </tr>
      );
    }); 
  };

  const delete_func = async (id) => {
    const res = await deleteAttendedMemeber(id);
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
            
            <Link to = {"/Admin/EventAttendanceConfirmed"+id} type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">
              Confirmed Members
            </Link>
          <h5>Attended Members for the Event</h5>
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership No</th>
                <th>Name</th>
              </tr>
              </thead>
              <tbody>
          
          <tr>
            {loadData()}
            <td></td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
                <th>Membership No</th>
                <th>Name</th>
              </tr>
            </tfoot>
          
            </table>
          </div>
          
      </div>
      {/* <button type="button"  className="btn btn-success float-right add_btn" >Save Changes</button> */}
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendanceAttended;