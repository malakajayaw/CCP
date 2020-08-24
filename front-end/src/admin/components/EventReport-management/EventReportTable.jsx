import React from 'react';

function EventReportTable(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            <button type="button" onClick={() => {props.onClick("EReport"); }} className="btn btn-success float-right add_btn" >Repport Management</button>
            
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Event Name</th>
                <th>Report Name</th>
                <th>Submission Status</th>
                <th>Manage</th>
              </tr>
              </thead>
            </table>
          </div>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div> 
  
    </section>
    );
}


export default EventReportTable;
