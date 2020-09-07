import React , {useState, useEffect  }from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { get_all_requsests} from '../../controllers/memeber.controller'
import Config from '../../controllers/config.controller'



  const MemberRequest = (props) => {
 
  const [selectMember, setSelectMember] = useState({ 
    addfname : '' , 
    addlname : '' ,
    addmname : '' ,
    addmnumber : '' ,
    addpemail : '' ,
    addoemail : '' ,
    addphone : '' ,
    addpassword : '' ,
    addcpassword : '' ,

    // editmnumber : '' ,
    // editfname : '' ,
    // editlname : '' ,
    // editpemail : '' ,
    // editphone : '' ,
    
  });
 
  const [members, Setmembers] = useState([]);

  useEffect(() => {
    getData();
}, []); 



async function getData() {
      var res = await get_all_requsests()
      Setmembers(res.data.data);
  
}


const readydata = () => {
  return   members.map((member, i) => {
    return(  
      <tr key={i}>
      <td>{i + 1}</td>
      <td>20204646</td>
    <td>{member.nameAsMemberShip}</td>
    <td>{member.email}</td>
      <td className="project-actions text-center">
        <a className="btn btn-success btn-sm mr-1 my-2" onClick={() => { props.onClick("EditDesignation"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Accept  </a>
        <a className="btn btn-danger btn-sm mr-1 my-2" href="#"> <i className="fas fa-trash mr-1" />Decline </a>
      </td>
    </tr>
    )
  })
}


  // useEffect ( async () => {
  //   const result = await get_all_requsests()
  //   console.log(result);
  //   if(result.code == 200)
  //   {
  //  var memberslist =  await result.data.data
  //    console.log(memberslist);
     
  
  //   }


  // });


  




  return (<section className="content" style={{ display: props.display }}>
    <div className="container-fluid">
    <h6>Member Requests</h6>


      <div className="card">
        
        <div className="card-header">
          {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
         
          <Link to="/MemberAdd" type="button" className="btn btn-success btn-sm float-right add_btn">Manage Members</Link>
    

        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          <table id="memberTable" className="table table-bordered table-striped dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Membership No.</th>
                <th>Name</th>
                <th>Affiliation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            { readydata() }
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
    {console.log("bye")}
  </section>);
}

export default MemberRequest;
