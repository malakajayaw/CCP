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
import useForceUpdate from "use-force-update";

 
function EventAttendanceRegistered(props) {
  const forceUpdate = useForceUpdate();
  let { id } = useParams();
  console.log(id);

  const [responses, setResponses] = useState([]);
  useEffect(() => {//1
    getData(id);
  }, []);

  async function getData(id) {
    var res = await get_responses(id);//getresponsesbyid (event id)
    await setResponses(res.data.data);
  }

  const loadData = () => {//2
    return responses.map((responses, index) => {//responses response
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
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership Number</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>
          
          <tr>
            <td>{loadData()}</td>
            <td>{loadData2()}</td>
          </tr>
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
      <button type="button" onClick={() => {props.onClick("EventView"); }} className="btn btn-success float-right add_btn" >Save Changes</button>
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendanceRegistered;