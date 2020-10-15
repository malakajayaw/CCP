import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import {get_all_events,deleteEvent} from "../../controllers/event.controller";
import Config from "../../controllers/config.controller";
import ContentHeader from '../Dashboard/ContentHeader'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'jquery/dist/jquery.min.js';
import $ from "jquery"
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

function EventTable(props){

  const initialValue = {events : ['']}; 
  const [size,setSize] = useState('10');   

    for(var i = 0; i < size; i++) {
      initialValue.events.push('');
  }

    const [events, setEvents] = useState([]);
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      var res = await get_all_events();
      await setEvents(res.data.data);
      $("#eventTable").dataTable();
    }

    const onDelete = async (id) => {
        const result = await deleteEvent(id)
        if(result.code == 200){
          Config.setToast(result.message)
          getData()
        }
      }

    var today = new Date();
    var status = null;

    const loadData = () => {
      return events.map((events, index) => {
        var eventDate = new Date(events.eventDate);
        if(today <= eventDate)
          status = "Open";
        else
          status = "Closed";

          return (
           <tr key={index} >
           <td>{events.eventName}</td>
          <td >{events.hostingAffiliation}</td>
          <td>{(new Date(events.eventDate).toDateString())}</td>
          <td ><span className ={status == "Open" ? "badge badge-success" : "badge badge-danger"  }>{status}</span> </td>      
          <td className="project-actions text-center">   
              <Link to={"/Admin/EventView/"+events._id}  className="btn btn-primary btn-sm mr-1"><i className="fas fa-folder mr-1"/> View</Link> 
              <Link to="/Admin/EventForm"  className="btn btn-info btn-sm mr-1 editEventBtn"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
              {/* <Link to="/Admin/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link>  */}
              <a className="btn btn-danger btn-sm mr-1" onClick={()=> onDelete(events._id)}> <i className="fas fa-trash mr-1" />Delete</a>
          </td>
      </tr>
        );
      }); 
        };


   return (      <div>
    <section className="content"  >
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">
          <Link to="/admin/EventForm" type="button" id="addEventBtn" className="btn btn-success float-right add_btn ml-2"> Add Event</Link>
          <Link to="/Admin/EventReportTable" type="button" className="btn btn-info float-right add_btn"> Event Reports</Link>
          
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          
        <table id="eventTable" className="table table-bordered table-striped dataTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Hosting Affiliation</th>
              <th style={{width: "15%"}}>Date</th>
              <th style={{width: "5%"}}>Status</th>
              <th style={{width: "25%"}}>Action</th>
            </tr>
            </thead>
            <tbody>
              {loadData()}
            </tbody>
            <tfoot>
            <tr>
              <th>Name</th>
              <th>Hosting Affiliation</th>
              <th style={{width: "15%"}}>Date</th>
              <th style={{width: "5%"}}>Status</th>
              <th style={{width: "25%"}}>Action</th>
            </tr>
            </tfoot>
          </table>
        </div>
    </div>
    {/* <!-- /.container-fluid --> */}
    </div> 
 
  </section>
  </div> 
 );
}

export default EventTable;

