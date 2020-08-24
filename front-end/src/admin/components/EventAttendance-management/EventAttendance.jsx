import React from 'react';

function EventAttendance(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
          <div class="col-sm-6">
                      <div class="form-group" >
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio1"/>
                          <label class="form-check-label">Registered</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="radio1" checked/>
                          <label class="form-check-label">Confirmed</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="radio1"/>
                          <label class="form-check-label">Attended</label>
                        </div>
                      </div>
                    </div>
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Membership No</th>
                <th>Time</th>
                <th>Confirmed</th>
                <th>Attendance</th>
                <th>Manage</th>
              </tr>
              </thead>
              <tbody>
          
          <tr>
            <td>001</td>
            <td>Current time</td>
            <td> </td>
            <td> </td>
            <td className="project-actions text-center">    
                <a className="btn btn-info btn-sm mr-1" href="#"  onClick={() => {props.onClick("EventForm"); }}>  <i className="fas fa-pencil-alt mr-1"/>Edit  </a>
                <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1"/>Delete </a>
              </td>
          </tr>
     
          </tbody>
            </table>
          </div>
          <button type="button" onClick={() => {props.onClick("EventView"); }} className="btn btn-success float-right add_btn" >Save Changes</button>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendance;