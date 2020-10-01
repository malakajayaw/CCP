import React, { useState, useEffect } from "react";
import { get_all_designations, delete_report } from "../../controllers/designation.controller";
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';


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

    const readydata = () => {
        return designation.map((designation, i) => {
            return (
                <tr key={i}>
                    <td>{designation.DesNo}</td>
                    <td>{designation.affiliationNo}</td>
                    <td>{designation.title}</td>
                    <td></td>
                </tr>
            );
        });
    };

    return (
        <section className="content" style={{ display: props.display }}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                        {/*<button type="button" onClick={() => {props.onClick("EReport"); }} className="btn btn-success float-right add_btn" >Repport Management</button>*/}
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
