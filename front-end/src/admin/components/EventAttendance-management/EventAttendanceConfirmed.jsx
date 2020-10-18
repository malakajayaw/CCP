import React from 'react';
import { Link } from 'react-router-dom';
  
const loadMembershipNumbers = () => {

}; 
function EventAttendanceConfirmed(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
          <Link to = "/Admin/EventAttendanceRegistered" type="button" className="btn btn-success btn-sm float-right add_btn mr-2 my-2">
              Registered Members
            </Link>
            <Link to = "/Admin/EventAttendanceAttended" type="button" className="btn btn-info btn-sm float-right add_btn mr-2 my-2">
              Attended Members
            </Link>
          <h5>Confirmed Members for the Event</h5>
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership No</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>
          
          <tr>
            <td>{loadMembershipNumbers()}</td>
            <td className="project-actions text-center">    
                <a className="btn btn-info btn-sm mr-1" href="#"  onClick={() => {props.onClick("EventForm"); }}>  <i className="fas fa-pencil-alt mr-1"/>Accept </a>
                <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1"/>Delete </a>
              </td>
          </tr>
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
      <button type="button" onClick={() => {props.onClick("EventView"); }} className="btn btn-success float-right add_btn" >Save Changes</button>
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendanceConfirmed;