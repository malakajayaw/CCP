import React from 'react';

function MemberRequest(props) {
  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            <button type="button" className="btn btn-success float-right add_btn">Add Member</button>
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
              
             
            </table>
          </div>
      </div>
      {/* <!-- /.container-fluid --> */}
      </div>
      {console.log("bye")}
    </section>);
}

export default MemberRequest;
