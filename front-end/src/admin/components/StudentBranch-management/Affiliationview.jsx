import React from 'react';
import { useState ,useEffect} from 'react';
import {get_all_affiliations} from "../../controllers/affiliationview.controller";
import Config from "../../controllers/config.controller";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'jquery/dist/jquery.min.js';
import $ from "jquery"
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

function AffiliationView(props){

  const initialValue = {affiliations : ['']};
  const [size,setSize] = useState('10');

    for(var i = 0; i < size; i++) {
      initialValue.affiliations.push('');
  }

    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
      getData();
    }, []);

    async function getData() {
      var res = await get_all_affiliations();
      await setAffiliations(res.data.data);
      $("#affiliationView").dataTable();
    }

    

    var today = new Date();
    var status = null;

    const loadData = () => {

        return affiliations.map((affiliations, index) => {
        var date = new Date(affiliations.date);


          return (
            <tr key={index} >
          <td>{index +1}</td>
          {/* <td>{affiliations.affiID}</td> */}
          { <td >{affiliations.affiliationtype }</td> }
          <td >{affiliations.affiliationname}</td>
          <td >{affiliations.affiliationno}</td>
          <td>{(new Date(affiliations.date).toDateString())}</td>
          <td ><span className ={affiliations.status == "Available" ? "badge badge-success" : "badge badge-danger"  }>{affiliations.status}</span> </td>

      </tr>
        );
      });
        };

   return (      <div>
    <section className="content"  >
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">



        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">

        <table id="affiliationView" className="table table-bordered table-striped dataTable" >
            <thead>
            <tr>
              <th>Affiliation ID</th>
              <th>Affiliation Type</th>
              <th>Affiliation Name</th>
              <th>IEEE Affiliation Number</th>
              <th style={{width: "15%"}}>Date</th>
              <th style={{width: "5%"}}>Status</th>

            </tr>
            </thead>
            <tbody>
              {loadData()}
            </tbody>
            <tfoot>
            <tr>
            <th>Affiliation ID</th>
              <th>Affiliation Type</th>
              <th>Affiliation Name</th>
              <th>IEEE Affiliation Number</th>
              <th style={{width: "15%"}}>Date</th>
              <th style={{width: "5%"}}>Status</th>

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

export default AffiliationView;



