import React, { useState, useEffect } from "react";
import { get_all_reports, delete_report } from "../../controllers/event.report.controller";
import Config from '../../controllers/config.controller'
import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';


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
    const res = await delete_report(id)
    if(res.code == 200){
      Config.setToast("Report Delete")
      forceUpdate();
    }else{
      Config.setToast("Something went wrong")
      forceUpdate();
    } 
  }

 
  const readydata = () => {
    return eventsReports.map((eventreport, i) => {
      return (
        <tr key={i}>
          <td>Event {i + 1}</td>
          <td>{eventreport.reportname}</td>
          <td>Submited</td>
          <td className="project-actions text-center">
           <Link to={`/Admin/EventReportView/${eventreport._id}`}><a className="btn btn-primary btn-sm mr-1"  style={{color:'black'}}>
              {" "}
              <i className="fas fa-folder mr-1" />
              View{" "}
            </a></Link> 

            <a className="btn btn-danger btn-sm mr-1" onClick={()=> delete_func(eventreport._id)}>
              {" "}
              <i className="fas fa-trash mr-1" />
              Delete{" "}
            </a>
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
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
            {/*<button type="button" onClick={() => {props.onClick("EReport"); }} className="btn btn-success float-right add_btn" >Repport Management</button>*/}
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <table
              id="eventReportTable"
              className="table table-bordered table-striped dataTable"
            >
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Report Name</th>
                  <th>Submission Status</th>
                  <th>Manage</th>
                </tr>
              </thead>

              <tbody>{readydata()}</tbody>
            </table>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    </section>
  );
};

export default EventReportTable;
