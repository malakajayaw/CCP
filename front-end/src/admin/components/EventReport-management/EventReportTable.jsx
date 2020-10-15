import React, { useState, useEffect } from "react";
import {
  get_all_reports,
  delete_report,
} from "../../controllers/event.report.controller";
import Config from "../../controllers/config.controller";
import EventReportView from "./EventReportView";
import { Link } from "react-router-dom";

import useForceUpdate from "use-force-update";

const EventReportTable = (props) => {
  const [eventsReports, SetEventReports] = useState([]);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    var res = await get_all_reports();
    await SetEventReports(res.data.data);
  }

  const delete_func = async (id) => {
    const res = await delete_report(id);
    if (res.code == 200) {
      Config.setToast("Report Delete");
      forceUpdate();
    } else {
      Config.setToast("Something went wrong");
      forceUpdate();
    }
  };

  const getFileName = (URL) => {
    let parts = URL.split("/");
    return parts.pop() || parts.pop();
  };

  const readydata = () => {
    return eventsReports.map((eventreport, i) => {
      //console.log(eventreport)
      return (
        <tr key={i}>
          <td>{eventreport.eventName}</td>
          <td>{getFileName(eventreport.file_path)}</td>
          <td>Submited</td>
          <td className="project-actions text-center">
            <Link to={`/Admin/EventReportView/${eventreport._id}`} className="btn btn-primary btn-sm mr-1" style={{ color: "black" }}><i className="fas fa-folder mr-1" />View</Link>
            <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(eventreport._id)}><i className="fas fa-trash mr-1" />Delete</a>
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="content" style={{ display: props.display }}>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
          </div>
          <div className="card-body">
            <table id="eventReportTable" className="table table-bordered table-striped dataTable">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Report Name</th>
                  <th>Submission Status</th>
                  <th style={{width: "25%"}}>Manage</th>
                </tr>
              </thead>

              <tbody>{readydata()}</tbody>

              <tfoot>
                <tr>
                  <th>Event Name</th>
                  <th>Report Name</th>
                  <th>Submission Status</th>
                  <th style={{width: "25%"}}>Manage</th>
                </tr>
              </tfoot>
              
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventReportTable;
