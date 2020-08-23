import React from 'react';

function ManageStudentBranch(props) {
  return (    <section className="content w-100" style={{display : props.display}}>
  <div className="container-fluid d-flex justify-content-center">
  <div className="card card-warning w-50">
  <div className="card-header">
    <h3 className="card-title">Manage Student Branch</h3>
  </div>
  {/*  type,name,affiliation number, date  */}
  {/* <!-- /.card-header --> */}
  {/* <!-- form start --> */}
  <form id="ManageStudentBranch">
    <div className="card-body">

    
    
    <div className="form-group">
        <label htmlFor="managestudentID">Edit Student Branch ID</label>
        <input type="text" className="form-control" id="managestudentID" placeholder="Enter student Branch ID" />
      </div>
    
    
    
    <div className="form-group">
          <label>Edit Student Branch Type</label>
          <select className="select2" multiple="multiple" data-placeholder="Select student type" style={{width: "100%"}}>
            <option>Type 1</option>
            <option>Type 2 </option>
            <option>Type 3 </option>
            <option>Type 4 </option>
            <option>Type 5 </option>
            <option>Type 6</option>
            <option>Type 7</option>
          </select>
      </div>


      <div className="form-group">
        <label htmlFor="EditSBname">Edit Student Branch Name</label>
        <input type="text" className="form-control" id="EditSBname" placeholder="Enter Student Branch name" />
      </div>


      <div className="form-group">
          <label>Update status</label>
          <select className="select4 " multiple="multiple" data-placeholder="Select status" style={{width: "100%"}}>
            <option>Available</option>
            <option>Not Available </option>
            
          </select>
      </div>
      




      <div className="form-group">
      <label htmlFor="manageDate">Edit Date of formation</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="far fa-clock"></i></span>
        </div>
        <input type="text" className="form-control float-right" id="manageTime" />
      </div>
      </div>
     
      
    </div>
    {/* <!-- /.card-body --> */}

    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Publish</button>
    </div>
  </form>
  <div className="d-none" id="dialog-confirm" title="Empty the recycle bin?">
  <p><span className="ui-icon ui-icon-alert" style={{float:"left", margin:"12px 12px 20px 0"}}></span>These items will be permanently deleted and cannot be recovered. Are you sure?</p>
</div>
</div>
</div>
</section>);
}


export default ManageStudentBranch;


//https://tempusdominus.github.io/bootstrap-4/Usage/ - date and time picker
