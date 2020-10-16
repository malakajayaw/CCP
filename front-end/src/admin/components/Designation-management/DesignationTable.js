import React, { useState, useEffect } from "react";
import { get_all_designations, remove_designation } from "../../controllers/designation.controller";
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { add_activity } from '../../controllers/activity.controller';
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const DesignationTable = (props) => {
    const [designation, SetDesignation] = useState([]);
    const forceUpdate = useForceUpdate();

    window.selectedaff = "Select affiliaion";
    window.selectedmem = "Select member";

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Delete designation",
        table: "Designations",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        //$.noConflict();
        var res = await get_all_designations();
        await SetDesignation(res.data.data);
        $("#DesTable").dataTable();
    }


    const delete_func = async (id, name,aff) => {
        addActivity(name,aff)
        const res = await remove_designation(id)
        if (res.code == 200) {
            Config.setToast("Designation removed")
            getData();
        } else {
            Config.setToast("Something went wrong")
            getData();
        }
    }

    const addActivity = async (name, aff) => {
        console.log(name);
        const date = new Date();
        activity.parameters = name + " / " + setAffData(aff);
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

    const readydata = () => {
        return designation.map((designation, i) => {
            return (
                <tr key={i}>
                    <td>{setAffData(designation.affiliationNo)}</td>
                    {/*loadAffData(designation.affiliationNo)*/}
                    <td>{designation.title}</td>
                    <td>{designation.type}</td>
                    <td className="project-actions text-center">
                        <Link to={`/Admin/EditDesignation/${designation._id}`}><a className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Edit{" "}
                        </a></Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(designation._id, designation.title, designation.affiliationNo)}>
                            {" "}
                            <i className="fas fa-trash mr-1" />Remove{" "}
                        </a>
                    </td>
                </tr>
            );
        });
    };

    //const [affiliations, setAffiliations] = useState({

    //    affiliationname: "",
    //});

    //async function getAffData(affid) {
    //    var res = await get_affiliation(affid);
    //    await setAffiliations(res.data.data);
    //    console.log(affiliations);
    //}

    //const loadAffData = (afffid) => {
    //    getAffData(afffid);
    //    return (
    //        <td>{affiliations.affiliationname}</td>
    //        );
    //};

    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/Admin/AddDesignation" type="button" className="btn btn-info float-right add_btn">Add Designation</Link>
                        <Link to="/Admin/PastDesignations" type="button" className="btn btn-info float-right add_btn">Past Designations</Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="DesTable"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Branch</th>
                                    <th>Designation Title</th>
                                    <th>Type</th>
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

export default DesignationTable;
