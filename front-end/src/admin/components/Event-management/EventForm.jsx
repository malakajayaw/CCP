import React,{useState, useEffect} from 'react';
import Config from '../../controllers/config.controller';
import { get_all_active_members} from '../../controllers/memeber.controller'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'jquery/dist/jquery.min.js';
import { Multiselect } from 'multiselect-react-dropdown';

function EventForm(props) {

  const [eventData,setEventData] = useState({eventName:'',eventDate:'',startTime:'',endTime:'',venue:'',description:'',hostingAffiliation:'',formLink:'',banner:null });
  const [vols,setVols] = useState([]);
  const [members, Setmembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState();
  var memberIds = [];

    useEffect(() => {
      getData();
  }, []); 


  async function getData() {
    var res = await get_all_active_members()
    await   Setmembers( setMemeberIds(res.data.data));
    
  }

  function setMemeberIds(members){
    var i = 0;
    members.forEach(member => {
        memberIds[i] = member.memberShipNo
        i++;
    });
    return memberIds;
  }

  const handleChange = event =>
  { 
    setEventData({...eventData, [event.target.id] :event.target.value})
    // console.log(eventData.eventName+' '+eventData.eventDate+' '+eventData.startTime+' '+eventData.endTime+' '+eventData.venue+' '+eventData.description+' '+eventData.hostingAffiliation+' '+eventData.volunteers+' '+eventData.banner);
  };
    

  function onSelect(selectedList, selectedMember) {
    vols.push(selectedMember);
    setSelectedMembers(vols);
  }

  function onRemove(selectedList, selectedMember) {
    for( var i = 0; i < selectedMembers.length; i++)
    { if ( selectedMembers[i] === selectedMember) { selectedMembers.splice(i, 1); }}
    setSelectedMembers(selectedMembers);
}

  const handleBanner = event =>
  {  setEventData({...eventData, banner : event.target.files[0] })};

  const clear = () => {
  setEventData({eventName:'',eventDate:'',startTime:'',endTime:'',venue:'',description:'',hostingAffiliation:'',formLink:'',banner:null  })
  setVols([]);
  }

  const send = async event =>{
    event.preventDefault();
    const data = new FormData();
    data.append("eventName",eventData.eventName);
    data.append("eventDate",eventData.eventDate);
    data.append("startTime",eventData.startTime);
    data.append("endTime",eventData.endTime);
    data.append("venue",eventData.venue);
    data.append("description",eventData.description);
    data.append("hostingAffiliation",eventData.hostingAffiliation);
    data.append("volunteers",selectedMembers)
    data.append("formLink",eventData.formLink);
    data.append("banner",eventData.banner);
    console.log(selectedMembers);
    try{
      const res = await Axios.post('/event/addEvent',data, {
        headers : {
          'Content-Type' : 'multipart/form-data'
        }
      });

      if(res.status === 201)
      {
        clear()
        Config.setToast("Event added successfully")
      }
    }catch(err){
      if(err.response.status === 500)
          console.log('There was a problem with then server');
        else
          console.log(err.response.data);
    }
  }

  return (    <div>
    {/* <ContentHeader pageName={props.page}/> */}
     <section className="content w-100" >
  <div className="container-fluid d-flex justify-content-center">
  <div className="card card-warning w-50">
  <div className="card-header">
    <h3 className="card-title">Event Form</h3>
  </div>
  <form id="eventForm"  method="post" onSubmit={send}>
    <div className="card-body">

      <div className="form-group">
        <label htmlFor="eventName">Event Name</label>
        <input type="text" value={eventData.eventName} onChange={handleChange}  className="form-control" id="eventName" placeholder="Enter event name" required/>
      </div>

      <div className="form-group">
        <label htmlFor="eventDate">Date</label>
        <input type="date" id="eventDate" value={eventData.eventDate} onChange={handleChange} className="form-control" required/>
      </div>

      <div className="form-group">
        <label htmlFor="eventTime">Start Time</label>
        <input type="time" id="startTime" value={eventData.startTime} onChange={handleChange} className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="eventTime">End Time</label>
        <input type="time" id="endTime" value={eventData.endTime} onChange={handleChange} className="form-control"/>
      </div>

      <div className="form-group">
        <label htmlFor="venue">Venue</label>
        <input type="text" value={eventData.venue} onChange={handleChange} className="form-control" id="venue" placeholder="Enter event venue" required/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
      <textarea id="description" value={eventData.description} onChange={handleChange} placeholder="Place some text here"
      style={{width: "100%", height: "200px", fontSize: "14px", lineHeight: "18px", border: "1px solid #dddddd", padding: "10px"}} />
      </div>

      <div className="form-group">
        <label htmlFor="hostingAffiliation">Hosting Affiliation</label>
        <input type="text" value={eventData.hostingAffiliation} onChange={handleChange}  className="form-control" id="hostingAffiliation" placeholder="Enter hosting affiliation" required/>
      </div>

      <div className="form-group">
        <label>Volunteers</label>
        <Multiselect options={members} isObject={false} onSelect={onSelect} onRemove={onRemove}  displayValue="name"  />
      </div>

      {/* <div className="form-group">
        <label htmlFor="formLink">Google Form link</label>
        <input type="text" value={eventData.formLink} onChange={handleChange}  className="form-control" id="formLink" placeholder="Enter Google Form link" />
      </div> */}
  
      {/* <div className="form-group">
        <label htmlFor="eventBanner">Event Banner</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="form-control" id="banner" accept="image/*" onChange={handleBanner} />
            <label className="custom-file-label" htmlFor="banner">Choose an image</label>
          </div>
        </div>
      </div> */}

    <div class="form-group">
      <label for="banner">Event Banner</label>
      <input type="file" class="form-control-file" id="banner" accept="image/*" onChange={handleBanner}/>
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