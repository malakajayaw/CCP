import React from 'react';

function EventForm(props) {
  return (    <section className="content w-100" style={{display : props.display}}>
  <div className="container-fluid d-flex justify-content-center">
  <div className="card card-warning w-50">
  <div className="card-header">
    <h3 className="card-title">Event Form</h3>
  </div>
  {/* name,date,venue,banner,description,volunteers,hosting aff, */}
  {/* <!-- /.card-header --> */}
  {/* <!-- form start --> */}
  <form id="eventForm">
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="eventName">Event Name</label>
        <input type="text" className="form-control" id="eventName" placeholder="Enter event name" />
      </div>
      <div className="form-group">
      <label htmlFor="eventTime">Date & Time</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="far fa-clock"></i></span>
        </div>
        <input type="text" className="form-control float-right" id="eventTime" />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="eventVenue">Venue</label>
        <input type="text" className="form-control" id="eventVenue" placeholder="Enter event venue" />
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
          <label>Volunteers</label>
          <select className="select2" multiple="multiple" data-placeholder="Select volunteers" style={{width: "100%"}}>
            <option> Anuka Jaysundara</option>
            <option>Prabhasha Amarathunga</option>
            <option>Maneesha Rajapaksha</option>
            <option>Malaka Jayawardena</option>
            <option>Thimithi Weerathunga</option>
            <option>Texas</option>
            <option>Washington</option>
          </select>
      </div>
  
      <div className="form-group">
        <label htmlFor="eventBanner">Event Banner</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="eventBanner" />
            <label className="custom-file-label" htmlFor="eventBanner">Choose an image</label>
          </div>
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


export default EventForm;


//https://tempusdominus.github.io/bootstrap-4/Usage/ - date and time picker