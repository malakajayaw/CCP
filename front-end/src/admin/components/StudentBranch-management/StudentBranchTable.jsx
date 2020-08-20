import React from 'react';

function StudentBranchTable(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            <button type="button"  onClick={() => {props.onClick("#"); }}  className="btn btn-success float-right add_btn">Add Student Branch</button>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <table id="eventTable" className="table table-bordered table-striped dataTable">
              <thead>
              <tr>
                <th>Student Branch ID</th>
                <th>Student Branch Type</th>
                <th>Name</th>
                <th style={{width: "15%"}}>Date of formation</th>
                <th style={{width: "5%"}}>Status</th>
                <th style={{width: "20%"}}>Manage</th>
              </tr>
              </thead>
              <tbody>
          
              <tr>
                <td>947</td>
                <td>Student Branch</td>
                <td>Student Branch- UOP</td>
                <td>04.05.2015</td>
                <td><span className="badge badge-success">Available</span></td>
                <td className="project-actions text-center">    
                    
                    <a className="btn btn-info btn-sm mr-1" href="#">  <i className="fas fa-pencil-alt mr-1"/>Manage </a>
                    
                  </td>
              </tr>
         
              </tbody>
              <tfoot>
              <tr>
                <th>Student Branch ID</th>
                <th>Student Branch Type</th>
                <th>Name</th>
                <th style={{width: "15%"}}>Date of formation</th>
                <th style={{width: "5%"}}>Status</th>
                <th style={{width: "20%"}}>Manage</th>
              </tr>
              </tfoot>
            </table>
          </div>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div> 
  
    </section>
    );
}


export default StudentBranchTable;