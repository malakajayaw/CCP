import React from 'react';

function StudentBranchForm(props) {
  return (    <section className="content w-100" style={{display : props.display}}>
  <div className="container-fluid d-flex justify-content-center">
  <div className="card card-warning w-50">
  <div className="card-header">
    <h3 className="card-title">Student Branch Form</h3>
  </div>
  {/* name,date,venue,banner,description,volunteers,hosting aff, */}
  {/* <!-- /.card-header --> */}
  {/* <!-- form start --> */}
  <form role="form">
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="StudentBranchName">Event Name</label>
        <input type="text" className="form-control" id="StudentBranchName" placeholder="Enter studentbranch name" required/>
      </div>
      <div className="form-group">
      <label htmlFor="StudentBranchTime">Date & Time</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="far fa-clock"></i></span>
        </div>
        <input type="text" className="form-control float-right" id="StudentBranchTime" required/>
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="StudentBranchVenue">Venue</label>
        <input type="text" className="form-control" id="StudentBranchVenue" placeholder="Enter StudentBranch venue" required/>
      </div>
      <div className="form-group">
        <label htmlFor="evetDescription">Description</label>
      <textarea id="evetDescription" className="textarea" placeholder="Place some text here"
      style={{width: "100%", height: "200px", fontSize: "14px", lineHeight: "18px", border: "1px solid #dddddd", padding: "10px"}} ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="hostingAffiliation">Hosting Affiliation</label>
        <input type="text" className="form-control" id="hostingAffiliation" placeholder="Enter hosting affiliation" />
      </div>
     
      
  
      <div className="form-group">
        <label htmlFor="StudentBranchBanner">Event Banner</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="studentbranchBanner" required/>
            <label className="custom-file-label" htmlFor="studentbranchBanner">Choose an image</label>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.card-body --> */}

    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Publish</button>
    </div>
  </form>
</div>


</div>
</section>);
}


export default StudentBranchForm;


//https://tempusdominus.github.io/bootstrap-4/Usage/ - date and time picker