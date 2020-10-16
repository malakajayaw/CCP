import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useForceUpdate from 'use-force-update';
import 'jquery/dist/jquery.min.js';
import $ from "jquery"

//controllers
import { get_all_designations, remove_designation } from "../../controllers/designation.controller";
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { add_activity } from '../../controllers/activity.controller';
import Config from '../../controllers/config.controller'

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


const DesignationTable = (props) => {

    //variable to store designations
    const [designation, SetDesignation] = useState([]);

    //place holders for react-select-search
    window.selectedaff = "Select affiliaion";
    window.selectedmem = "Select member";

    //variable to store activities
    let [activity] = useState({
        MemNo: "To be taken from redux",
        action: "Delete designation",
        table: "Designations",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        getData();
    }, []);

    //get all designations
    async function getData() {
        var res = await get_all_designations();
        await SetDesignation(res.data.data);
        $("#DesTable").dataTable();
    }

    //remove assigned designation
    const delete_func = async (id, name, aff) => {
        addActivity(name, aff)
        const res = await remove_designation(id)
        if (res.code == 200) {
            Config.setToast("Designation removed")
            //refresh page
            getData();
        } else {
            Config.setToast("Something went wrong")
            //refresh page
            getData();
        }
    }

    //add activity log about deleted designation
    const addActivity = async (name, aff) => {
        const date = new Date();
        //set parameters for activity variable
        activity.parameters = name + " / " + setAffData(aff);
        //set date for activity variable
        activity.datetime = date.toLocaleString();
        //add activity to database
        await add_activity(activity)
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

    //load table data
    const readydata = () => {
        return designation.map((designation, i) => {
            return (
                <tr key={i}>
                    <td>{setAffData(designation.affiliationNo)}</td>
                    <td>{designation.title}</td>
                    <td>{designation.type}</td>
                    <td className="project-actions text-center">
                        <Link to={`/Admin/EditDesignation/${designation._id}`} className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Edit{" "}
                        </Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(designation._id, designation.title, designation.affiliationNo)}>
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
                        <Link to="/Admin/AddDesignation" type="button" className="btn btn-info float-right add_btn">Add Designation</Link>
                        <Link to="/Admin/PastDesignations" type="button" className="btn btn-info float-right add_btn">Past Designations</Link>
                    </div>
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
            </div>
        </section>
    );
};

export default DesignationTable;
