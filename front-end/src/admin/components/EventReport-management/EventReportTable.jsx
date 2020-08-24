import React from 'react';

function EventReportTable(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            {/*<button type="button" onClick={() => {props.onClick("EReport"); }} className="btn btn-success float-right add_btn" >Repport Management</button>*/}
            
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

              <tbody>
          
          <tr>
            <td>Event 1</td>
            <td>Report 1</td>
            <td>Not Submitted.</td>
            <td className="project-actions text-center">    
                <a className="btn btn-primary btn-sm mr-1" href="#" onClick={() => {props.onClick("EventView"); }} > <i className="fas fa-folder mr-1"/>View </a>
                <a className="btn btn-info btn-sm mr-1" href="#"  onClick={() => {props.onClick("EventForm"); }}>  <i className="fas fa-pencil-alt mr-1"/>Edit  </a>
                <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1"/>Delete </a>
              </td>
          </tr>
     
          </tbody>
            </table>
          </div>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div> 
  
    </section>
    );
}


export default EventReportTable;
