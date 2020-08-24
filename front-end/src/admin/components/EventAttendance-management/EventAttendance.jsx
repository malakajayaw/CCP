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
            </table>
          </div>
          <button type="button" onClick={() => {props.onClick(""); }} className="btn btn-success float-right add_btn" >Save Changes</button>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div>   
    </section>
    );
}


export default EventAttendance;