import React,{Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import {get_all_affiliation} from "../../controllers/affiliation.controller";
import Config from "../../controllers/config.controller";
import ContentHeader from '../Dashboard/ContentHeader'

function AffiliationTable(props){

  const initialValue = {affiliation : ['']}; 
  const [size,setSize] = useState('10');   

    for(var i = 0; i < size; i++) {
      initialValue.affiliation.push('');
  }

    const [affiliation, setAffiliation] = useState([]);
    useEffect(() => {
      getData();
    }, []);

    async function getData() {
      var res = await get_all_affiliation();
      await setAffiliation(res.data.data);
    }

    var today = new Date();
    var status = null;

    const loadData = () => {
      return affiliation.map((affiliation, index) => {

       

          return (
          <tr key={index} >
          <td>{affiliation.affiID}</td>
          <td>{affiliation.affiliationtype}</td>
          <td>{affiliation.affiliationname}</td>
          <td>{affiliation.affiliationno}</td>
          <td>{affiliation.date}</td>
          <td ><span className ={status == "Available" ? "badge badge-success" : "badge badge-danger"  }>{status}</span> </td>      
          <td className="project-actions text-center">   
              <Link to="/Admin/ManageAffiliationForm"  className="btn btn-info btn-sm mr-1 editAffiliationBtn"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
             
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
          <Link to="/admin/StudentForm" type="button" id="addaffiliationBtn" className="btn btn-success float-right add_btn ml-2"> Add Affiliation</Link>
          
          
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          
        <table id="affiliationTable" className="table table-bordered table-striped dataTable" >
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
              {loadData()}
            </tbody>
            <tfoot>
            <tr>
              <th>Affiliation ID</th>
              <th>Affiliation Type</th>
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
  </div> 
 );

}

export default AffiliationTable;



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

// class AffiliationTable extends Component{

//   constructor(props){
//       super(props);
//       this.state = {affiliation : ['']}
//   }

//    componentDidMount(){
//        fetch('/affiliation')
//        .then(res => res.json())
//        .then(affiliation => this.setState({affiliation}, () => console.log('Affiliation fetched..',affiliation)));
//    };

//    render(){
//     console.log(this.props);
//        return ( <section className="content" style={{display : this.props.display}}>
//        <div className="container-fluid">
//          <div className="card">
//            <div className="card-header">
//              <Link to="/Admin/StudentForm" type="button" className="btn btn-success float-right add_btn ml-2"> Add Affiliation</Link>
             
            
//            </div>
//            {/* <!-- /.card-header --> */}
//            <div className="card-body">
//              <table id="affiliationTable" className="table table-bordered table-striped dataTable">
//                <thead>
//                <tr>
//                 <th>Affiliation ID</th>
//                 <th>Affiliation Type</th>
//                 <th>Name</th>
//                 <th>IEEE Affiliation Number</th>
//                 <th style={{width: "15%"}}>Date of formation</th>
//                 <th style={{width: "5%"}}>Status</th>
//                 <th style={{width: "20%"}}>Manage</th>
//               </tr>
//                </thead>
//                <tbody>
                
//                {this.state.affiliation.map(affiliation => <tr key={affiliation.affiliationId} >
//                  <td>{affiliation.affiID}</td>
//                  <td>{affiliation.affiliationtype}</td>
//                  <td>{affiliation.affiliationname}</td>
//                  <td>{affiliation.affiliationno}</td>
//                  <td>{affiliation.date}</td>
//                  <td><span className ={affiliation.status ==='Available' ? "badge badge-success" : "badge badge-danger"  }>{affiliation.status}</span> </td>      
//                  <td className="project-actions text-center">   
                     
//                      <Link to="/Admin/ManageAffiliation" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1"/> Edit</Link> 
//                      <Link to="" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1"/> Delete</Link>
//                  </td>
//                  </tr>)}
          
//                </tbody>
//                <tfoot>
//                <tr>
//                 <th>Student Branch ID</th>
//                 <th>Student Branch Type</th>
//                 <th>Name</th>
//                 <th>IEEE Affiliation Number</th>
//                 <th style={{width: "15%"}}>Date of formation</th>
//                 <th style={{width: "5%"}}>Status</th> 
//                 <th style={{width: "20%"}}>Manage</th>
//               </tr>
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


// export default AffiliationTable;
