import React from 'react';

function EventReportAdd(props) {
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
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Add a New Report for an Event</h3>

              <h4 class="card-title">Event Manager should submit an report after finishing an event. He/She must include all the relevent information about the event. The report should be in .pdf format.</h4>

            </div>

            <div class="card-body">
              <div class="form-group">
                <label for="inputFName">Report Name : </label>
                <input type="text" id="inputReportName" class="form-control"/>

                <label for="inputEName">Event Name : </label>
                <input type="text" id="inputEventName" class="form-control"/>   

                <label for="inputEName">Submission Status : </label>
                <input type="text" id="inputSubmissionStatus" class="form-control"/>  

                <label>Date :</label>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                  </div>
                    <input type="text" class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask/>
                </div>   

              <div class="form-group">
                <label for="inputSCmnt">Submission Comments : </label>
                <input type="text" id="inputSComments" class="form-control"/>
              </div>

              <div class="card-footer">
                  <button type="submit" class="btn btn-info">Add Submission</button>
                  <button type="button" class="btn btn-default float-right">Clear</button>
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