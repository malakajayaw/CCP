import React from 'react';


function MemberAdd(props) {
  return (<section className="content" style={{ display: props.display }}>
    <div className="container-fluid">
    <h6>Member Management</h6>
      <div className="card">
        <div className="card-header">
          {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}

          <button type="button" onClick={() => { props.onClick("Member Request"); }} className="btn btn-success btn-sm float-right add_btn">Requests</button>

        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">

          <section class="content">
            <div class="row justify-content-md-center">
              <div class="col-md-6">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Add New Member</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="inputFName">First Name</label>
                      <input type="text" id="inputFName" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputMName">Name as per the Membership Card</label>
                      <input type="text" id="inputMName" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputOEmail">IEEE Email</label>
                      <input type="text" id="inputOEmail" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputPassword">Password</label>
                      <input type="password" id="inputPassword" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputCPassword">Confirm Password</label>
                      <input type="password" id="inputCPassword" class="form-control" />
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <a href="#" class="btn btn-secondary">Cancel</a>
                        <input type="submit" value="Create Member Profile" class="btn btn-success float-right" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <div class="col-md-6">
                <div class="card card-info">
                  <div class="card-header">
                    <h3 class="card-title">Edit Member</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    </div>
                  </div>


                  <div class="card-body">
                    <div class="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputFName">First Name</label>
                      <input type="text" id="inputFName" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" class="form-control" />
                    </div>

            



                    <div class="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" class="form-control" />
                    </div>

              

                    <div class="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" class="form-control" />
                    </div>

                

                    <div class="row">

                      <div class="col-12">
                        <a href="#" class="btn btn-secondary">Cancel</a>
                        <input type="submit" value="Edit Member Profile" class="btn btn-info float-right" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </section>


        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  
  </section>);

}

export default MemberAdd;
