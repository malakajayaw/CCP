import React from 'react';
import {useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { get_affiliation} from '../../controllers/affiliation.controller';
import { get_all_active_members} from '../../controllers/memeber.controller'

function ViewMembers(props) {

    const [affiliation, setAffiliation] = useState({affiliation:['']});
    let { affiId } = useParams();
    var i = 0;
   

    const [members, Setmembers] = useState([]);
  

    useEffect(() => {
      onLoadAffiliation(affiId);
      getData();
  }, []); 
  
    const onLoadAffiliation = async (affiId) => {
      const result = await get_affiliation(affiId);
      await  setAffiliation(result.data.data);
    }

    async function getData() {
      var res = await get_all_active_members()
      await   Setmembers(res.data.data);
    }


    const loadMembers = () => {
      return   members.map((member, index) => {
        return(  
        <tr><option value={member.memberShipNo} key={index}> {member.memberShipNo}</option>   </tr>
        
        )
      })
    }

    const loadMemberName = () => {
      return   members.map((member, index) => {
        return(  
        <tr><option value={member.fname} key={index}> {member.fname}</option>   </tr>
        
        )
      })
    }


    



  return (  <div>
    
    <section className="content" >
  <div className="card">
    <div className="card-header">
    <div className="row">
    <div className="col-6">
      <h3 className="card-title"><b>Affiliation Details</b></h3>
      </div>
      <div className="col-6">

      </div>
      </div>
    </div>
    <div className="card-body">
    
        <h3 className="text-primary mt-3 mb-3">{affiliation.affiliationname} </h3>
      <div className="col-12 px-4">
         
              
                    <div className="text-muted">
                      <p className="text-md"><i className="fas fa-id-badge"></i> <b>{affiliation.affiliationno}</b></p>
                    </div>
              </div>

      <table id="viewmembers" className="table table-bordered table-striped dataTable" >
            <thead>
            <tr>
              <th>Membership number</th>
              <th>Member Name</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loadMembers()}</td>
                <td>{loadMemberName()}</td>
                
              </tr>
            </tbody>
            <tfoot>
            <tr>
              <th>Membership number</th>
              <th>Member Name</th>
            </tr>
            </tfoot>
          </table>


    </div>   
    {/* <!-- /.card-body --> */}
  </div>
  {/* <!-- /.card --> */}

</section>
</div>);
}

export default ViewMembers;