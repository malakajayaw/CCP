import React,{useState} from 'react';
import ContentHeader from '../Dashboard/ContentHeader'

function EventForm(props) {

  const [eventData,setEventData] = useState({eventName:'',eventTime:'',eventVenue:'',eventDescription:'',hostingAffiliation:'',volunteers:['']});

  const handleChange = event =>
  { 
    setEventData({...eventData, [event.target.id] :event.target.value})
    console.log(eventData.eventName+' '+eventData.eventTime+' '+eventData.eventVenue+' '+eventData.eventDescription+' '+eventData.hostingAffiliation+' '+eventData.volunteers);
    };


    const handleSubmit = e =>
  { 
    e.preventDefault();
    console.log(JSON.stringify(eventData));

    fetch('http://localhost:5000/addEvent', {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
    }).then(response => {
        console.log(response)
    })
        .catch(error => {
            console.log(error)
        })
  }

  return (    <div>
    <ContentHeader pageName={props.page}/>
     <section className="content w-100" style={{display : props.display}}>
  <div className="container-fluid d-flex justify-content-center">
  <div className="card card-warning w-50">
  <div className="card-header">
    <h3 className="card-title">Event Form</h3>
  </div>
  {/* name,date,venue,banner,description,volunteers,hosting aff, */}
  {/* <!-- /.card-header --> */}
  {/* <!-- form start --> */}
  <form id="eventForm"  method="post" onSubmit={handleSubmit} encType='multipart/form-data'>
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="eventName">Event Name</label>
        <input type="text" value={eventData.eventName} onChange={handleChange}  className="form-control" id="eventName" placeholder="Enter event name" />
      </div>
      <div className="form-group">
      <label htmlFor="eventTime">Date & Time</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="far fa-clock"></i></span>
        </div>
        <input type="text" value={eventData.eventTime} onChange={handleChange}  className="form-control float-right" id="eventTime" />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="eventVenue">Venue</label>
        <input type="text" value={eventData.eventVenue} onChange={handleChange} className="form-control" id="eventVenue" placeholder="Enter event venue" />
      </div>
      <div className="form-group">
        <label htmlFor="eventDescription">Description</label>
      <textarea id="eventDescription" className="" value={eventData.eventDescription} onChange={handleChange} placeholder="Place some text here"
      style={{width: "100%", height: "200px", fontSize: "14px", lineHeight: "18px", border: "1px solid #dddddd", padding: "10px"}} />
      </div>

      <div className="form-group">
        <label htmlFor="hostingAffiliation">Hosting Affiliation</label>
        <input type="text" value={eventData.hostingAffiliation} onChange={handleChange}  className="form-control" id="hostingAffiliation" placeholder="Enter hosting affiliation" />
      </div>
     
      <div className="form-group">
          <label>Volunteers</label>
          <select className="" id="volunteers" value={eventData.volunteers} onChange={handleChange} multiple="multiple"  data-placeholder="Select volunteers" style={{width: "100%"}}>
            <option value="Anuka Jaysundara"> Anuka Jaysundara</option>
            <option value="Prabhasha Amarathunga">Prabhasha Amarathunga</option>
            <option value="Maneesha Rajapaksha">Maneesha Rajapaksha</option>
            <option value="Malaka Jayawardena">Malaka Jayawardena</option>
            <option value="Thimithi Weerathung"> Thimithi Weerathunga</option>
            <option value="Texas">Texas</option>
            <option value="Washington">Washington</option>
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
</section>
</div>);
}


export default EventForm;


//https://tempusdominus.github.io/bootstrap-4/Usage/ - date and time picker