import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  get_all_active_members,
  accept_or_reject,
} from "../../controllers/memeber.controller";
import Config from "../../controllers/config.controller";

import "jquery/dist/jquery";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const MemberRequest = (props) => {
  const [selectMember, setSelectMember] = useState({
    addfname: "",
    addlname: "",
    addmname: "",
    addmnumber: "",
    addpemail: "",
    addoemail: "",
    addphone: "",
    addpassword: "",
    addcpassword: "",

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
    var res = await get_all_active_members();
    await Setmembers(res.data.data);
    $("#memberTable").dataTable();
  }

  const ace_or_rej = async (mem, state) => {
    var data = {
      memberShipNo: mem,
      state: state,
    };

    const result = await accept_or_reject(data);
    if (result.code == 200) {
      Config.setToast(result.message);
      getData();
    }
  };

  const readydata = () => {
    return members.map((member, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{member.memberShipNo}</td>
          <td>
            {member.fname}&nbsp;{member.lname}
          </td>
          <td>SLIIT Student Branch</td>
          <td>{member.contactNo}</td>
          <td>{member.email}</td>
          <td className="project-actions text-center">
          <Link
              className="btn btn-warning btn-sm mr-1 my-2"
              onClick=""
            >
              {" "}
              <i className="fas fa-trash mr-1" />
              view
            </Link>
            <Link
              to={`/Admin/MemberEdit/${member._id}`}
              type="button"
              className="btn btn-info btn-sm mr-1 my-2"
            >
              <i className="fas fa-pencil-alt mr-1" />
              Update
            </Link>
            <Link
              className="btn btn-secondary btn-sm mr-1 my-2"
              onClick={() => ace_or_rej(member.memberShipNo, false)}
            >
              {" "}
              <i className="fas fa-trash mr-1" />
              Remove
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="content" style={{ display: props.display }}>
      <div className="container-fluid">
        

        <div className="card">
          <div className="card-header bg-dark">
          <h6>Active Members</h6>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <table
              id="memberTable"
              className="table table-bordered table-striped dataTable"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Membership No.</th>
                  <th>Name</th>
                  <th>Affiliation</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th style={{width: "25%"}}>Action</th>
                </tr>
              </thead>
              <tbody>{readydata()}</tbody>
            </table>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
      {console.log("bye")}
    </section>
  );
};

export default MemberRequest;
