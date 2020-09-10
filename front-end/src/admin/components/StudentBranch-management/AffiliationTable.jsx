import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// function StudentBranchTable(props) {
//   return ( <section className="content" style={{display : props.display}}>
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-header">
//             {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
//             <button type="button"  onClick={() => {props.onClick("StudentBranchForm"); }}  className="btn btn-success float-right add_btn">Add Student Branch</button>
//           </div>
//           {/* <!-- /.card-header --> */}
//           <div className="card-body">
//             <table id="StudentBranchTable" className="table table-bordered table-striped dataTable">
//               <thead>
//               <tr>
//                 <th>Student Branch ID</th>
//                 <th>Student Branch Type</th>
//                 <th>Name</th>
//                 <th style={{width: "15%"}}>Date of formation</th>
//                 <th style={{width: "5%"}}>Status</th>
//                 <th style={{width: "20%"}}>Manage</th>
//               </tr>
//               </thead>
//               <tbody>
          
//               <tr>
//                 <td>947</td>
//                 <td>Student Branch</td>
//                 <td>Student Branch- UOP</td>
//                 <td>04.05.2015</td>
//                 <td><span className="badge badge-success">Available</span></td>
//                 <td className="project-actions text-center">    
                    
//                 <a className="btn btn-info btn-sm mr-1" href="#" onClick={() => {props.onClick("ManageStudentBranch"); }} > <i className="fas fa-pencil-alt mr-1"/>Manage </a>
//                 <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1"/>Delete </a>

                    
//                   </td>
//               </tr>
         
//               </tbody>
//               <tfoot>
//               <tr>
//                 <th>Student Branch ID</th>
//                 <th>Student Branch Type</th>
//                 <th>Name</th>
//                 <th style={{width: "15%"}}>Date of formation</th>
//                 <th style={{width: "5%"}}>Status</th>
//                 <th style={{width: "20%"}}>Manage</th>
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

class AffiliationTable extends Component{

  constructor(props){
      super(props);
      this.state = {affiliation : ['']}
  }

   componentDidMount(){
       fetch('/affiliation')
       .then(res => res.json())
       .then(affiliation => this.setState({affiliation}, () => console.log('Affiliation fetched..',affiliation)));
   };

   render(){
    console.log(this.props);
       return ( <section className="content" style={{display : this.props.display}}>
       <div className="container-fluid">
         <div className="card">
           <div className="card-header">
             <Link to="/StudentForm" type="button" className="btn btn-success float-right add_btn ml-2"> Add Affiliation</Link>
             
            
           </div>
           {/* <!-- /.card-header --> */}
           <div className="card-body">
             <table id="affiliationTable" className="table table-bordered table-striped dataTable">
               <thead>
               <tr>
                <th>Affiliation ID</th>
                <th>Affiliation Type</th>
                <th>Name</th>
                <th>IEEE Affiliation Number</th>
                <th style={{width: "15%"}}>Date of formation</th>
                <th style={{width: "5%"}}>Status</th>
                <th style={{width: "20%"}}>Manage</th>
              </tr>
               </thead>
               <tbody>
                
               {this.state.affiliation.map(affiliation => <tr key={affiliation.affiliationId} >
                 <td>{affiliation.affiID}</td>
                 <td>{affiliation.affiliationtype}</td>
                 <td>{affiliation.affiliationname}</td>
                 <td>{affiliation.affiliationno}</td>
                 <td>{affiliation.date}</td>
                 <td><span className ={affiliation.status ==='Available' ? "badge badge-success" : "badge badge-danger"  }>{affiliation.status}</span> </td>      
                 <td className="project-actions text-center">   
                     
                     <Link to="/ManageAffiliation" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
                     <Link to="" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link>
                 </td>
                 </tr>)}
          
               </tbody>
               <tfoot>
               <tr>
                <th>Student Branch ID</th>
                <th>Student Branch Type</th>
                <th>Name</th>
                <th>IEEE Affiliation Number</th>
                <th style={{width: "15%"}}>Date of formation</th>
                <th style={{width: "5%"}}>Status</th> 
                <th style={{width: "20%"}}>Manage</th>
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


export default AffiliationTable;
