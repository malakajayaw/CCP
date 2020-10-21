import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  get_all_rewards,
  member_delete,
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
    var res = await get_all_rewards();
    await Setmembers(res.data);
    $("#memberTable").dataTable();
  }

  const removeMember = async (mem, state) => {
    var data = {
      memberShipNo: mem,
      state: state,
    };

    const result = await member_delete(data);
    if (result.code == 200) {
      Config.setToast(result.message);
      getData();
    }
  };

  const readydata = () => {
    return members.map(( row, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{row.member.memberShipNo}</td>
          <td>
            {row.member.fname}&nbsp;{row.member.lname}
          </td>
           <td>{row.affiliation}</td>
          <td>{row.member.contactNo}</td>
          <td>{row.member.email}</td>
          <td>{row.points}</td>
          <td className="project-actions text-center">
          <span
              className="btn btn-warning btn-sm mr-1 my-2"
              onClick=""
            >
              {" "}
              <i className="fas fa-trash mr-1" />
              view
            </span>
            <Link
              to={`/Admin/MemberEdit/${row.member._id}`}
              type="button"
              className="btn btn-success btn-sm mr-1 my-2"
            >
              <i className="fas fa-pencil-alt mr-1" />
              Update
            </Link>
            <Link
              className="btn btn-secondary btn-sm mr-1 my-2"
              onClick={() => removeMember(row.member.memberShipNo, false)}
            >
              {" "}
              <i className="fas fa-trash mr-1" />
              Remove
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="content" style={{ display: props.display }}>
      <div className="container-fluid">
        <h6>Active Members</h6>

        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}

            <Link
              to="/Admin/MemberRequest"
              type="button"
              className="btn btn-success btn-sm float-right add_btn"
            >
              Requests
            </Link>
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
                  <th>Points</th>
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
