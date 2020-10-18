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


  const readydata = () => {
    return members.map((member, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{member.memberShipNo}</td>
          <td>
            {member.fname}&nbsp;{member.lname}
          </td>

          <td>{member.contactNo}</td>
          <td>{member.email}</td>
          <td className="project-actions text-center">
            <Link
              to={`/Admin/MemberEdit/${member._id}`}
              type="button"
              className="btn btn-success btn-sm mr-1 my-2"
            >
              <i className="fas fa-pencil-alt mr-1" />
              Update
            </Link>
            <a
              className="btn btn-danger btn-sm mr-1 my-2"
              onClick=""
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
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
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
