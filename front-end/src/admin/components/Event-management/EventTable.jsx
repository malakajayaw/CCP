import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// function EventTable(props) {
//   return ( <section className="content" style={{display : props.display}}>
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-header">
//             {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
//             <button type="button"  onClick={() => {props.onClick("EventForm"); }}  className="btn btn-success float-right add_btn ml-2">Add Event</button>
//             <button type="button"  onClick={() => {props.onClick("VReport"); }}  className="btn btn-info float-right add_btn">Event Reports</button>
//           </div>
//           {/* <!-- /.card-header --> */}
//           <div className="card-body">
//             <table id="eventTable" className="table table-bordered table-striped dataTable">
//               <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Hosting Affiliation</th>
//                 <th style={{width: "15%"}}>Date & Time</th>
//                 <th style={{width: "5%"}}>Status</th>
//                 <th style={{width: "20%"}}>Action</th>
//               </tr>
//               </thead>
//               <tbody>
          
//               <tr>
//                 <td>Gecko</td>
//                 <td>Firefox 1.5</td>
//                 <td>1.8</td>
//                 <td><span className="badge badge-success">Open</span></td>
//                 <td className="project-actions text-center">    
//                     <a className="btn btn-primary btn-sm mr-1" href="#" onClick={() => {props.onClick("EventView"); }} > <i className="fas fa-folder mr-1"/>View </a>
//                     <a className="btn btn-info btn-sm mr-1" href="#"  onClick={() => {props.onClick("EventForm"); }}>  <i className="fas fa-pencil-alt mr-1"/>Edit  </a>
//                     <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1"/>Delete </a>
//                   </td>
//               </tr>
         
//               </tbody>
//               <tfoot>
//               <tr>
//                 <th>Name</th>
//                 <th>Hosting Affiliation</th>
//                 <th>Date & Time</th>
//                 <th style={{width: "5%"}}>Status</th>
//                 <th style={{width: "20%"}}>Action</th>
//               </tr>
//               </tfoot>
//             </table>
//           </div>
//       </div>
//       {/* <!-- /.container-fluid --> */}
//       </div> 
  
//     </section>
//     );
// }

class EventTable extends Component{

  constructor(props){
      super(props);
      this.state = {events : ['']}
  }

   componentDidMount(){
       fetch('/events')
       .then(res => res.json())
       .then(events => this.setState({events}, () => console.log('Events fetched..',events)));
   };

   render(){
    console.log(this.props);
       return ( <section className="content" style={{display : this.props.display}}>
       <div className="container-fluid">
         <div className="card">
           <div className="card-header">
             <Link to="/EventForm" type="button" className="btn btn-success float-right add_btn ml-2"> Add Event</Link>
             <Link to="/VReport" type="button" className="btn btn-info float-right add_btn"> Event Reports</Link>
             {/* <button type="button"  onClick={() => {this.props.onClick("VReport"); }}  className="btn btn-info float-right add_btn">Event Reports</button> */}
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
           
               {this.state.events.map(events => <tr key={events.eventId} >
                 <td>{events.eventName}</td>
                 <td>{events.hostingAffiliation}</td>
                 <td>{events.date}</td>
                 <td><span className ={events.status ==='Open' ? "badge badge-success" : "badge badge-danger"  }>{events.status}</span> </td>      
                 <td className="project-actions text-center">   
                     <Link to={"/EventView/"+events.eventId}  className="btn btn-primary btn-sm mr-1"><i className="fas fa-folder mr-1"/> View</Link> 
                     <Link to="/EventForm" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
                     <Link to="/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link> 
                 </td>
                 </tr>)}
          
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
     );
   }
}


export default EventTable;
