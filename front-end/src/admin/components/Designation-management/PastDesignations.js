import React, { useState, useEffect } from "react";
import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"

//controllers
import { get_all_past_designations, remove_past_designation } from "../../controllers/pastdes.controller";
import { add_activity } from '../../controllers/activity.controller';
import { get_all_members } from "../../controllers/designation.controller";
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import Config from '../../controllers/config.controller'
import { Link } from "react-router-dom";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const PastDesignations = (props) => {

    //variable to store past designations
    const [pastdes, SetPastDes] = useState([]);

    //for updating components
    const forceUpdate = useForceUpdate();

    //place holders for react-select-search
    window.selectedaff = "Select affiliaion";
    window.selectedmem = "Select member";

    //variable to store activities
    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Delete record - Admin",
        table: "Records",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        getData();
    }, []);

    //get all past designations
    async function getData() {
        var res = await get_all_past_designations();
        await SetPastDes(res.data.data);
        $("#PastDes").dataTable();
    }

    //remove assigned designation
    const delete_func = async (id, title, mem, year, aff) => {
        addActivity(title, mem, year, aff)
        const res = await remove_past_designation(id)
        if (res.code == 200) {
            Config.setToast("Record removed")
            //refresh page
            await getData();
        } else {
            Config.setToast("Something went wrong")
            //refresh page
            await getData();
        }
    }

    //add activity log about deleted past designation
    const addActivity = async (title, mem, year, aff) => {
        const date = new Date();
        //set parameters for activity variable
        activity.parameters = title + " / " + setMemData(mem) + " / " + year + " / " + setAffData(aff);
        //set date for activity variable
        activity.datetime = date.toLocaleString();
        //add activity to database
        const result3 = await add_activity(activity)
    }

    //variable to store affiliations
    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
        getAffData();
    }, []);

    //get all the affiliations from the database
    async function getAffData() {
        var res1 = await get_all_affiliations();
        await setAffiliations(res1.data.data);
    }

    //get affiliation data for a given _id
    const setAffData = (id) => {
        return affiliations.map((affiliations, index) => {
            if (id == affiliations._id) {
                return (affiliations.affiliationname);
            }
        });
    };

    //variable to store members
    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();
    }, []);

    //get all members from data base
    async function getMemData() {
        var res1 = await get_all_members();
        await setMember(res1.data.data);
    }

    //get member data for a given _id
    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname);
            }
        });
    };

    //get membership no for a given _id
    const setMemNo = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.memberShipNo);
            }
        });
    };

    //load table data
    const readydata = () => {
        return pastdes.map((pastdes, i) => {
            return (
                <tr key={i}>
                    <td>{setAffData(pastdes.affiliationNo)}</td>
                    <td>{pastdes.title}</td>
                    <td>{setMemNo(pastdes.MemNo)}</td>
                    <td>{setMemData(pastdes.MemNo)}</td>
                    <td>{pastdes.Year}</td>
                    <td className="project-actions text-center">
                        <Link to={`/Admin/EditPastDes/${pastdes._id}`}><a className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Update{" "}
                        </a></Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(pastdes._id, pastdes.title, pastdes.MemNo, pastdes.Year, pastdes.affiliationNo)}>
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
                        <Link to="/Admin/AddPastDesignation" type="button" className="btn btn-info float-right add_btn">Add Record</Link>
                    </div>
                    <div className="card-body">
                        <table
                            id="PastDes"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Affiliation</th>
                                    <th>Designation Title</th>
                                    <th>Member ID</th>
                                    <th>Member Name</th>
                                    <th>Year</th>
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

export default PastDesignations;
