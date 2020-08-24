import React from 'react';

function EventReportApp(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            
            
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
          <button type="button" onClick={() => {props.onClick("AReport"); }} className="btn btn-success float-right add_btn" >Add Report</button>
          <button type="button" onClick={() => {props.onClick("EAttendance"); }} className="btn btn-success float-right add_btn" >Add Attendance</button>
          </div>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div> 
  
    </section>
    );
}


export default EventReportApp;