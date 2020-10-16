import React, { useState, useEffect } from "react";
import { get_all_past_designations, remove_past_designation } from "../../controllers/pastdes.controller";
import { add_activity } from '../../controllers/activity.controller';
import { get_all_members } from "../../controllers/designation.controller";
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const PastDesignations = (props) => {
    const [pastdes, SetPastDes] = useState([]);
    const forceUpdate = useForceUpdate();

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

    async function getData() {
        var res = await get_all_past_designations();
        await SetPastDes(res.data.data);
        $("#PastDes").dataTable();
    }

    const delete_func = async (id, title, mem, year, aff) => {
        addActivity(title, mem, year, aff)
        const res = await remove_past_designation(id)
        if (res.code == 200) {
            Config.setToast("Member removed")
            await getData();
        } else {
            Config.setToast("Something went wrong")
            await getData();
        }
    }

    const addActivity = async (title, mem, year, aff) => {
        console.log(title);
        const date = new Date();
        activity.parameters = title + " / " + setMemData(mem) + " / " + year + " / " + setAffData(aff);
        activity.datetime = date.toLocaleString();
        console.log("act: " + JSON.stringify(activity));
        const result3 = await add_activity(activity)
        console.log(result3);
    }

    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
        getAffData();

    }, []);

    async function getAffData() {
        var res1 = await get_all_affiliations();
        await setAffiliations(res1.data.data);
        console.log("aff: " + affiliations);
    }

    const setAffData = (id) => {
        return affiliations.map((affiliations, index) => {
            if (id == affiliations._id) {
                return (affiliations.affiliationname);
            }
        });
    };

    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();

    }, []);

    async function getMemData() {
        var res1 = await get_all_members();
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

    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/Admin/AddPastDesignation" type="button" className="btn btn-info float-right add_btn">Add Record</Link>
                    </div>
                    {/* <!-- /.card-header --> */}
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
                {/* <!-- /.container-fluid --> */}
            </div>
        </section>
    );
};

export default PastDesignations;
