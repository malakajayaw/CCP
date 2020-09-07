import React, { useState, useEffect } from 'react';

import moment from 'moment';

const  EventReportAdd = (props) => {

  const [submit, setSubmit] = useState({
    value1 : "Not Submitted"
  });
  const [today, setToday] = useState(
   
  );

  const todayfucn = ()=>{
    let newDate = new Date()

  const today =   moment(newDate).format("MMM Do YY");  
  setToday(today)

  console.log(today);
  }


  useEffect(() => {
    todayfucn()
  });

  return ( <section className="content" style={{display : props.display}}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
           
    <section class="content">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title pb-1 mb-1" style={{fontWeight:'600'}}>Add a New Report for an Event</h3>
              <p class="card-title" style={{fontSize:'12px'}}>Event Manager should submit an report after finishing an event. He/She must include all the relevent information about the event. The report should be in .pdf format.</p>

            </div>

            <div class="card-body">
              <div class="form-group">
                <label for="inputFName">Report Name : </label>
                <input type="file" id="inputReportName" class="form-control"/>
                

                <label for="inputEName">Event Name : </label>
                <input type="text" id="inputEventName" class="form-control" readOnly value="IEEE Iwarai"/>   

                <label for="inputEName">Submission Status : </label>
                <input type="text" id="inputSubmissionStatus" class="form-control" readOnly value={submit.value1}/>  

                <label>Date :</label>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                  </div>
                    <input type="text" value={today} class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask/>
                </div>   

              <div class="form-group">
                <label for="inputSCmnt">Submission Comments : </label>
                <input type="text" id="inputSComments" class="form-control"/>
              </div>

              <div class="card-footer" style={{padding:'0px '}}>
                  <button type="button" class="btn btn-default float-right">Clear</button>
                  <button type="submit" class="btn btn-info">Add Submission</button>
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
      {console.log("bye")}
    </section>);
}

export default EventReportAdd;