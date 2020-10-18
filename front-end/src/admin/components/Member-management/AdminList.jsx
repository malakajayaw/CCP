import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  get_all_active_members,
  accept_or_reject,
  get_all_admin,
} from "../../controllers/admin.controller";
import Config from "../../controllers/config.controller";

import "jquery/dist/jquery";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const AdminAdd = (props) => {
  const [selectAdmin, setSelectAdmin] = useState({
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

  const [admins, Setadmins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    var res = await get_all_admin();
    await Setadmins(res.data.data);
    $("#adminTable").dataTable();
  }


  const readydata = () => {
    return admins.map((admin, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{admin.memberShipNo}</td>
          <td>
            {admin.fname}&nbsp;{admin.lname}
          </td>

          <td>{admin.contactNo}</td>
          <td>{admin.email}</td>
          <td className="project-actions text-center">
            <Link
              to={`/Admin/MemberEdit/${admin._id}`}
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
        <h6>Active Admins</h6>

        <div className="card">
          <div className="card-header">
            {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}

            <Link
              to="/Admin/Admin"
              type="button"
              className="btn btn-success btn-sm float-right add_btn"
            >
              Add Admin
            </Link>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <table
              id="adminTable"
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

export default AdminAdd;
