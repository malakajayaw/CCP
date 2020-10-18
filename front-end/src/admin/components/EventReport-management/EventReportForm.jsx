import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import Config from "../../controllers/config.controller";
import useForceUpdate from "use-force-update";
import { add_event_report } from "../../controllers/event.report.controller";

const EventReportAdd = (props) => {
  let { val } = useParams();
  let { id } = useParams();
  let { aff } = useParams();
  console.log(val);
  console.log(id);
  console.log(aff);
  const forceUpdate = useForceUpdate();

  const [submit, setSubmit] = useState({
    value1: "Not Submitted",
  });
  const [today, setToday] = useState();

  const todayfucn = () => {
    let newDate = new Date();
    const today = moment(newDate).format("MMM Do YY");
    setToday(today);
    console.log(today);
  };

  useEffect(() => {
    let newDate = new Date();

    const today = moment(newDate).format("MMM Do YY");
    setToday(today);
    todayfucn();
  });

  let [event, setEvent] = useState({
    eventId: id,
    eventname: val,
    hostingAffiliation: aff,
    submissionstate: "Not Submitted",
    date: moment(new Date()).format("MMM Do YY"),
    submissioncomment: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await add_event_report(event);
      console.log(result);
      if (result.code == 200) {
        clear();
        Config.setToast("Report Added Successfully");
        forceUpdate();
      }
  };

  const clear = () => {
    console.log("Clear call");
    setEvent({
      eventId: id,
      eventname: val,
      submissionstate: "Not Submitted",
      date: today,
      submissioncomment: "",
    });
  };

  const handleChangeFile = (e) => {
    if (e.target.files.length) {
      setEvent({ ...event, file: e.target.files[0] });
    }
  };

  console.log(event.eventname);
  console.log(event.eventId);

  return (
    <section className="content" style={{ display: props.display }}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <section class="content">
              <div class="row justify-content-md-center">
                <div class="col-md-12">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3
                        class="card-title pb-1 mb-1"
                        style={{ fontWeight: "600" }}
                      >
                        Add a New Report for an Event
                      </h3>
                      <p class="card-title" style={{ fontSize: "12px" }}>
                        Event Manager should submit an report after finishing an
                        event. He/She must include all the relevent information
                        about the event. The report should be in .pdf format.
                      </p>
                    </div>

                    <div class="card-body">
                      <form onSubmit={onSubmit}>
                        <div class="form-group">
                          <label for="inputFName">Report : </label>
                          <input
                            accept="application/pdf"
                            className="form-control"
                            id="inputReportName"
                            name="inputReportName"
                            type="file"
                            onChange={handleChangeFile}
                          />

                          <label for="inputEName">Event Name : </label>
                          <input
                            type="text"
                            id="inputEventName"
                            name="eventname"
                            class="form-control"
                            value={event.eventname}
                            readOnly
                          />

                          <label for="inputEName">Submission Status : </label>
                          <input
                            type="text"
                            name="submissionstate"
                            id="inputSubmissionStatus"
                            class="form-control"
                            readOnly
                            value={event.submissionstate}
                          />

                          <label>Date :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="far fa-calendar-alt"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              value={event.date}
                              name="date"
                              class="form-control"
                              data-inputmask-alias="datetime"
                              data-inputmask-inputformat="dd/mm/yyyy"
                              data-mask
                            />
                          </div>

                          <div class="form-group">
                            <label for="inputSCmnt">
                              Submission Comments :{" "}
                            </label>
                            <input
                              type="text"
                              id="inputSComments"
                              class="form-control"
                              onChange={handleChange}
                              value={event.submissioncomment}
                              name="submissioncomment"
                            />
                          </div>

                          <div class="card-footer" style={{ padding: "0px " }}>
                            {/* <button type="button" class="btn btn-default float-right">Clear</button> */}
                            <button type="submit" class="btn btn-info">
                              Add Submission
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventReportAdd;
