import React, { useState, useEffect } from "react";
import { get_all_assignments, remove_assignment } from "../../controllers/designationAss.controller";
import Config from '../../controllers/config.controller'
//import EventReportView from './EventReportView'
import { Link } from "react-router-dom";

import useForceUpdate from 'use-force-update';
//Datatable Modules
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"


const AssignedDesignationsTable = (props) => {
    const [assignment, SetAssignments] = useState([]);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        var res = await get_all_assignments();
        await SetAssignments(res.data.data);
    }

    const delete_func = async (id) => {
        const res = await remove_assignment(id)
        if (res.code == 200) {
            Config.setToast("Member removed")
            forceUpdate();
        } else {
            Config.setToast("Something went wrong")
            forceUpdate();
        }
    }

    const readydata = () => {
        return assignment.map((assignment, i) => {
            return (
                <tr key={i}>
                    <td>{assignment.title}</td>
                    <td>{assignment.MemNo}</td>
                    <td>Not yet implemented</td>
                    <td>{assignment.forYear}</td>
                    <td className="project-actions text-center">
                        <Link to={`/EditAssigned/${assignment._id}`}><a className="btn btn-primary btn-sm mr-1" style={{ color: 'black' }}>
                            {" "}
                            <i className="fas fa-folder mr-1" />
                             Update{" "}
                        </a></Link>
                        <a className="btn btn-danger btn-sm mr-1" onClick={() => delete_func(assignment.AssNo)}>
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
                        <Link to="/PastDesignation" type="button" className="btn btn-info float-right add_btn">Past Designations</Link>
                        {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                        {/*<button type="button" onClick={() => { props.onClick("Pdesignations"); }} className="btn btn-success float-right add_btn" >Past Designations</button>*/}
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="eventReportTable"
                            className="table table-bordered table-striped dataTable"
                        >
                            <thead>
                                <tr>
                                    <th>Designation Title</th>
                                    <th>Designated Member</th>
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

export default AssignedDesignationsTable;
