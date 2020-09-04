import React from 'react';



function MemberRequest(props) {
  return (<section className="content" style={{ display: props.display }}>
    <div className="container-fluid">
    <h6>Member Requests</h6>
      <div className="card">
        
        <div className="card-header">
          {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
         
          <button type="button" onClick={() => { props.onClick("Add Member"); }} className="btn btn-success btn-sm float-right add_btn">Manage Members</button>

        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          <table id="memberTable" className="table table-bordered table-striped dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Membership No.</th>
                <th>Name</th>
                <th>Affiliation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>20204646</td>
                <td>Prabhasha Amarathunga</td>
                <td>SLIIT Student Branch</td>
                <td className="project-actions text-center">
                  <a className="btn btn-success btn-sm mr-1" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
                  <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>20204549</td>
                <td>Anuka Jayasundara</td>
                <td>SLIIT Student Branch</td>
                <td className="project-actions text-center">
                  <a className="btn btn-success btn-sm mr-1" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
                  <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>20204730</td>
                <td>Maneesha Rajapaksha</td>
                <td>SLIIT Student Branch</td>
                <td className="project-actions text-center">
                  <a className="btn btn-success btn-sm mr-1" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
                  <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>20217000</td>
                <td>Malaka Jayawardhana</td>
                <td>SLIIT Student Branch</td>
                <td className="project-actions text-center">
                  <a className="btn btn-success btn-sm mr-1" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
                  <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>20201964</td>
                <td>Thimithi Weerathunga</td>
                <td>SLIIT Student Branch</td>
                <td className="project-actions text-center">
                  <a className="btn btn-success btn-sm mr-1" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
                  <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
                </td>
              </tr>
            </tbody>


          </table>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  </section>);
}

export default MemberRequest;
