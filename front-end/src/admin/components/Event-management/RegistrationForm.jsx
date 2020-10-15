import React from 'react';
import {useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import ContentHeader from '../Dashboard/ContentHeader'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {addRegistrationForm} from "../../controllers/event.controller";
import Config from "../../controllers/config.controller";
import $ from "jquery";
 import "../../../css/adminlte.css"

function RegistrationForm() {

    const [formFields, setformFields] = useState([]);
    const [fieldName, setFieldName] = useState('');
    const [fieldNames, setFieldNames] = useState([]);
    const [eventType, setEventType] = useState();
    let { eventId } = useParams();
    var fieldId;

    const handleChange = event =>
    { 
       setFieldName(event.target.value);
    };

    const handleTypeChange = event =>
    { 
       setEventType(event.target.value);
    };

    const addEventType = (event) => {
      event.preventDefault();
      if(eventType == "membersOnly"){

        fieldNames.push("Member ID");
        fieldId = fieldName.replace(/ /g, '');

        formFields.push("<div className='form-group'><label htmlFor='MemberIDField'>Member ID</label><br/><input type='text' className='form-control' id='MemberIDField' placeholder='Enter Member ID' required/></div><br/>");
      }else if(eventType == "public"){

        fieldNames.push("Member ID or Name");
        fieldId = fieldName.replace(/ /g, '');

        formFields.push("<div className='form-group'><label htmlFor='PublicField'>Member ID or Name</label><br/><input type='text' className='form-control' id='PublicField' placeholder='Enter Member ID or Name' required/></div><br/>");
      }else{
        return;
      }

      setformFields(formFields);
      setFieldNames(fieldNames)

      loadField();
      setFieldName('');
    };

    const addField = () =>{
        
        fieldId = fieldName.replace(/ /g, '');

        if(fieldId.length > 30)
          fieldId = fieldId.substring(0,25);

        formFields.push("<div className='form-group'><label htmlFor='"+fieldId+"'>"+fieldName+"</label><br/><input type='text' className='form-control' id='"+fieldId+"' placeholder='Enter "+fieldName+"' required/></div><br/>");
        setformFields(formFields);

        fieldNames.push(fieldName);
        setFieldNames(fieldNames)

        loadField();
        setFieldName('');
    
    }

    const loadField = () => {
        $("#previewRegFormBody").append($(formFields[formFields.length-1]))
    };

    const createForm =  async (e) => {
   
      const result = await addRegistrationForm (formFields, fieldNames ,eventId)
      if(result.code == 200)
        Config.setToast("Registration Form Created Successfully!")
      
    }

  return (  <div>
    {/* <ContentHeader pageName={props.page}/> */}
    <section className="content" >
  <div className="card">
    <div className="card-header">
    <div className="row">
    <div className="col-6">
      <h3 className="card-title">Create Event Registion Form</h3>
      </div>
      <div className="col-6">
        <Link to="/Admin/EventReportForm" type="button" className="btn btn-info float-right add_btn ml-2">Add Report</Link>
        <Link to="/Admin/EventAttendance" type="button" className="btn btn-success float-right add_btn">Add Attendance</Link>
      </div>
      </div>
    </div>

    <div className="card-body">
    <div className="row">
        <div className="col-12 col-md-12 col-lg-8 order-1 order-md-1">

        <div className="d-flex justify-content-center mb-3">
          <h2 className="m-0 text-dark">Event Form Preview</h2>
        </div>
        
        <form id="previewRegForm"  method="post" >
          
        <div className="info-box bg-light">
        <div className="info-box-content" >
        <div className="d-flex justify-content-center">  

        <div className="card-body" id="previewRegFormBody"> </div>

        </div></div></div>

        <button className='btn btn-outline-primary' disabled>Register</button>

        </form>
        </div>

        <div className="col-12 col-md-12 col-lg-4 order-2 order-md-2">
            
            <div className="card-body">

                <div className="form-group">
                <label htmlFor="eventTypeDropDown">Event Type</label>
                  <select class="custom-select" id="eventTypeDropDown" onChange={handleTypeChange} required>
                      <option selected>Select Event Type</option>
                      <option value="membersOnly">Members Only</option>
                      <option value="public">Public</option>
                      <option value="none">none</option>
                    </select>
                </div>

                <button className="btn btn-primary mb-2" onClick={addEventType}>Add Field</button>

                <div className="form-group">
                    <label htmlFor="fieldName">Field Name</label>
                    <input type="text"  value={fieldName} onChange={handleChange} className="form-control" id="fieldName" placeholder="Enter Field name" required/>
                </div>

                <button type="submit" className="btn btn-primary mb-5" onClick={addField}>Add Field</button>
                <button type="submit" className="btn btn-block btn-outline-warning" onClick={createForm}>Create From</button>
            </div>
            {/* <!-- /.card-body --> */}     
          

        </div>
      </div>
    </div>
    {/* <!-- /.card-body --> */}
  </div>
  {/* <!-- /.card --> */}

</section>
</div>);
}

export default RegistrationForm;