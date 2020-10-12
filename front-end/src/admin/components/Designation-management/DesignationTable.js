import React, { useState, useEffect } from "react";
import { get_all_designations, remove_designation } from "../../controllers/designation.controller";
import { get_affiliation } from "../../controllers/affiliation.controller";
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';
//Datatable Modules
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"


const DesignationTable = (props) => {
    const [designation, SetDesignation] = useState([]);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        var res = await get_all_designations();
        await SetDesignation(res.data.data);
    }


    const delete_func = async (id) => {
        const res = await remove_designation(id)
        if (res.code == 200) {
            Config.setToast("Designation removed")
            forceUpdate();
        } else {
            Config.setToast("Something went wrong")
            forceUpdate();
        }
    }

    const readydata = () => {
        return designation.map((designation, i) => {
            return (
                <tr key={i}>
                    <td>{designation.DesNo}</td>
                    <td>{designation.affiliationNo}</td>
                    <td>{designation.title}</td>
                    <td>{designation.type}</td>
                    <td className="project-actions text-center">
                        <Link to={`/EditDesignation/${designation._id}`}><a className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Edit{" "}
                        </a></Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(designation._id)}>
                            {" "}
                            <i className="fas fa-trash mr-1" />Remove{" "}
                        </a>
                    </td>
                </tr>
            );
        });
    };

    const [affiliations, setAffiliations] = useState({

        affiliationname: "",
    });

    async function getAffData(affid) {
        var res = await get_affiliation(affid);
        await setAffiliations(res.data.data);
        console.log(affiliations);
    }

    const loadAffData = (afffid) => {
        getAffData(afffid);
        return (
            <td>{affiliations.affiliationname}</td>
            );
    };

    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/AddDesignation" type="button" className="btn btn-info float-right add_btn">Add Designation</Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="eventReportTable"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Designation ID</th>
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
