import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import ContentHeader from '../Dashboard/ContentHeader'

function EventTable(props){

  const initialValue = {events : ['']}; 
  const [size,setSize] = useState('10');   

    for(var i = 0; i < size; i++) {
      initialValue.events.push('');
  }
  const [events,setEvents] = useState({events : ['']});
 
    useEffect(() => {
      fetch('/events')
      .then(res => res.json())
      .then(events => {setSize(events.length); setEvents({events})});
    } ,[] )

   return ( <div>
   <section className="content"  >
   <div className="container-fluid">
     <div className="card">
       <div className="card-header">
         <Link to="/admin/EventForm" type="button" id="addEventBtn" className="btn btn-success float-right add_btn ml-2"> Add Event</Link>
         <Link to="/VReport" type="button" className="btn btn-info float-right add_btn"> Event Reports</Link>
         {/* <button type="button"  onClick={() => {this.props.onClick("VReport"); }}  className="btn btn-info float-right add_btn">Event Reports</button> */}
       </div>
       {/* <!-- /.card-header --> */}
       <div className="card-body">
         <table id="eventTable" className="table table-bordered table-striped dataTable" >
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
    
         { events.events.map((events,index) => <tr key={index} >
                <td>{events.eventName}</td>
          <td >{events.hostingAffiliation}</td>
          <td>{events.date}</td>
          <td ><span className ={events.status ==='Open' ? "badge badge-success" : "badge badge-danger"  }>{events.status}</span> </td>      
          <td className="project-actions text-center">   
              <Link to={"/admin/EventView/"+events.eventId}  className="btn btn-primary btn-sm mr-1"><i className="fas fa-folder mr-1"/> View</Link> 
              <Link to="/admin/EventForm"  className="btn btn-info btn-sm mr-1 editEventBtn"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
              <Link to="/admin/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link> 
          </td>
      </tr>) }
  
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

// class EventTable extends Component{

//   constructor(props){
//       super(props);
//       this.state =  {events : ['']}
//       this.testVarible= 0
//     }

//    componentDidMount(){
//        fetch('/events')
//        .then(res => res.json())
//        .then(events => this.setState({events}, () => {console.log("Data Fetched...",events);}));
//    };


//    render(){
//        return ( <section className="content"  >
//        <div className="container-fluid">
//          <div className="card">
//            <div className="card-header">
//              <Link to="/EventForm" id="addEventBtn" type="button" className="btn btn-success float-right add_btn ml-2"> Add Event</Link>
//              <Link to="/VReport" type="button" className="btn btn-info float-right add_btn"> Event Reports</Link>
//              {/* <button type="button"  onClick={() => {this.props.onClick("VReport"); }}  className="btn btn-info float-right add_btn">Event Reports</button> */}
//            </div>
//            {/* <!-- /.card-header --> */}
//            <div className="card-body">
//              <table id="eventTable" className="table table-bordered table-striped dataTable" >
//                <thead>
//                <tr>
//                  <th>Name</th>
//                  <th>Hosting Affiliation</th>
//                  <th style={{width: "15%"}}>Date</th>
//                  <th style={{width: "5%"}}>Status</th>
//                  <th style={{width: "25%"}}>Action</th>
//                </tr>
//                </thead>
//                <tbody>


//                 {   this.state.events.map((events, index) => 
//                          <tr key={index} >
//                       <td>{events.eventName} </td>
//                       <td >{events.hostingAffiliation}</td>
//                       <td>{events.date}</td>
//                       <td ><span className ={events.status ==='Open' ? "badge badge-success" : "badge badge-danger"  }>{events.status}</span> </td>      
//                       <td className="project-actions text-center">   
//                           <Link to={"/EventView/"+events.eventId}  className="btn btn-primary btn-sm mr-1"><i className="fas fa-folder mr-1"/> View</Link> 
//                           <Link to="/EventForm"  className="btn btn-info btn-sm mr-1 editEventBtn"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
//                           <Link to="/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link> 
//                       </td>
//                      </tr>
              
               
//                 //  console.log(this.testVarible);
//                 //  console.log(events);
                 
//                 //  this.testVarible = this.testVarible+1;
//                 )   
//                   } 

 
//                </tbody>
//                <tfoot>
//                <tr>
//                  <th>Name</th>
//                  <th>Hosting Affiliation</th>
//                  <th style={{width: "15%"}}>Date</th>
//                  <th style={{width: "5%"}}>Status</th>
//                  <th style={{width: "25%"}}>Action</th>
//                </tr>
//                </tfoot>
//              </table>
//            </div>
//        </div>
//        {/* <!-- /.container-fluid --> */}
//        </div> 
//      </section>
//      );
//    }
// }


// export default EventTable;

