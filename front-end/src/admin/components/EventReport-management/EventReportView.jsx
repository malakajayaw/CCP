import React, { useState, useEffect } from "react";

import moment from "moment";
import Config from "../../controllers/config.controller";

import { get_spec_report } from "../../controllers/event.report.controller";
import { useLocation, useParams } from "react-router-dom";

const EventReportView = (props) => {
  console.log(props.location);
  const params = useParams();
  const id = params.id;

  console.log(id);

  const [eventsReports, SetEventReports] = useState({
    eventName: "",
    created_at: "",
    submissionComment: "",
    submssionState: "Submited",
    file_path: "",
  });

  useEffect(() => {
    console.log(id);
    eventReportDetails(id);
  }, []);

  const eventReportDetails = async (id) => {
    const result = await get_spec_report(id);
    console.log(result.message.data);
    SetEventReports(result.message.data);
    console.log(eventsReports.submssionState);
  };

  const getFileName = (URL) => {
    let parts = URL.split("/");
    return parts.pop() || parts.pop();
  };

  return (
    <section className="content" style={{ display: props.display }}>
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
                      <h3
                        class="card-title pb-1 mb-1"
                        style={{ fontWeight: "600" }}
                      >
                        Report for an Event
                      </h3>
                    </div>

                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <label for="inputFName">Report Name : </label>
                          <input
                            type="text"
                            id="inputReportNameView"
                            readOnly
                            value={getFileName(eventsReports.file_path)}
                            class="form-control"
                          />
                          {/* <input type="file" id="inputReportNameView" class="form-control"/> */}

                          <label for="inputEName">Event Name : </label>
                          <input
                            type="text"
                            id="inputEventNameView"
                            name="eventname"
                            class="form-control"
                            value={eventsReports.eventName}
                            readOnly
                          />

                          <label for="inputEName">Submission Status : </label>
                          <input
                            type="text"
                            name="submissionstate"
                            id="inputSubmissionStatus"
                            value="Submited"
                            class="form-control"
                            readOnly
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
                              name="date"
                              class="form-control"
                              readOnly
                              data-inputmask-alias="datetime"
                              data-inputmask-inputformat="dd/mm/yyyy"
                              data-mask
                              value={eventsReports.created_at}
                            />
                          </div>

                          <div class="form-group">
                            <label for="inputSCmnt">
                              Submission Comments :{" "}
                            </label>
                            <input
                              type="text"
                              id="inputSCommentsView"
                              class="form-control"
                              readOnly
                              value={eventsReports.submissionComment}
                              name="submissioncomment"
                            />
                          </div>
                          <div>
                            <a
                              href={eventsReports.file_path}
                              className="card-link m-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="far fa-file-pdf"></i>
                              <span className="ml-4">
                                {getFileName(eventsReports.file_path)}
                              </span>
                            </a>
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
        {/* <!-- /.container-fluid --> */}
      </div>
    </section>
  );
};

export default EventReportView;
