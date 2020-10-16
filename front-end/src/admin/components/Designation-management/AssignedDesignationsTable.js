import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"

//controllers
import { get_aff_spec_designations, remove_designation_mem, get_all_members } from "../../controllers/designation.controller";
import { add_activity } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'

//datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const AssignedDesignationsTable = (props) => {

    //for updating components
    const forceUpdate = useForceUpdate();

    //place holders for react-select-search
    window.selectedaff = "Select affiliaion";
    window.selectedmem = "Select member";

    //variable to store destinations
    const [Designation, SetDesignation] = useState([]);

    //variable to store activities
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

    //get designations for a specific affiliation
    async function getData() {
        var res = await get_aff_spec_designations("5f85d2e1b708c81ce0a4de85");
        await SetDesignation(res.data.data);
        $("#AssDes").dataTable();
    }

    //remove assigned member
    const delete_func = async (Designation, id, name, title) => {
        addActivity(name, title)
        const res = await remove_designation_mem(Designation, id)
        if (res.code == 200) {
            Config.setToast("Member removed")
            //refresh page
            getData();
        } else {
            Config.setToast("Something went wrong")
            //refresh page
            getData();
        }
    }

    //add activity log about deleted member
    const addActivity = async (name, title) => {
        const date = new Date();
        //set parameters for activity variable
        activity.parameters = setMemData(name) + " / " + title;
        //set date for activity variable
        activity.datetime = date.toLocaleString();
        //add activity to database
        const result3 = await add_activity(activity)
    }

    //variable to store members
    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();
    }, []);

    //get all the members from database
    async function getMemData() {
        var res1 = await get_all_members();
        await setMember(res1.data.data);
    }

    //get member name relevent to a given _id
    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname);
            }
        });
    };

    //get membership no relevent to a given _id
    const setMemNo = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.memberShipNo);
            }
        });
    };

    //load table data
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
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(Designation, Designation._id, Designation.MemNo, Designation.title)}>
                            {" "}
                            <i className="fas fa-trash mr-1" />Remove{" "}
                        </a>
                    </td>
                </tr>
            );
        });
    };

    //render table
    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/Admin/PastSpecDesignations" type="button" className="btn btn-info float-right add_btn">Past Designations</Link>
                    </div>
                    <div className="card-body">
                        <table
                            id="AssDes"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Designation Title</th>
                                    <th>Member ID</th>
                                    <th>Member Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>{readydata()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssignedDesignationsTable;
