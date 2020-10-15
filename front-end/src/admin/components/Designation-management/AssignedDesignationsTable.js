import React, { useState, useEffect } from "react";
import { get_aff_spec_designations, remove_designation_mem } from "../../controllers/designation.controller";
import { get_all_active_members } from "../../controllers/memeber.controller";
import { add_activity } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const AssignedDesignationsTable = (props) => {
    const [Designation, SetDesignation] = useState([]);
    const forceUpdate = useForceUpdate();

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Remove assignment",
        table: "Designations",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        var res = await get_aff_spec_designations("5f85d2e1b708c81ce0a4de85");
        await SetDesignation(res.data.data);
        $("#AssDes").dataTable();
    }

    const delete_func = async (Designation, id, name) => {
        addActivity(name)
        const res = await remove_designation_mem(Designation, id)
        if (res.code == 200) {
            Config.setToast("Member removed")
            forceUpdate();
        } else {
            Config.setToast("Something went wrong")
            forceUpdate();
        }
    }

    const addActivity = async (name) => {
        console.log(name);
        const date = new Date();
        activity.parameters = name;
        activity.datetime = date.toLocaleString();
        console.log("act: " + JSON.stringify(activity));
        const result3 = await add_activity(activity)
        console.log(result3);
    }

    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();

    }, []);

    async function getMemData() {
        var res1 = await get_all_active_members();
        await setMember(res1.data.data);
        console.log("aff: " + member);
    }

    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname);
            }
        });
    };

    const setMemNo = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.memberShipNo);
            }
        });
    };

    const readydata = () => {
        return Designation.map((Designation, i) => {
            return (
                <tr key={i}>
                    <td>{Designation.title}</td>
                    <td>{setMemNo(Designation.MemNo)}</td>
                    <td>{setMemData(Designation.MemNo)}</td>
                    <td className="project-actions text-center">
                        <Link to={`/Admin/EditAssigned/${Designation._id}`}><a className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Assign New{" "}
                        </a></Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(Designation, Designation._id, Designation.MemNo)}>
                            {" "}
                            <i className="fas fa-trash mr-1" />Remove{" "}
                        </a>
                    </td>
                </tr>
            );
        });
    };

    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/Admin/PastSpecDesignations" type="button" className="btn btn-info float-right add_btn">Past Designations</Link>
                        {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                        {/*<button type="button" onClick={() => { props.onClick("Pdesignations"); }} className="btn btn-success float-right add_btn" >Past Designations</button>*/}
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="AssDes"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Designation Title</th>
                                    <th>Designated Member</th>
                                    <th>Member Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>{readydata()}</tbody>
                        </table>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </div>
        </section>
    );
};

export default AssignedDesignationsTable;
