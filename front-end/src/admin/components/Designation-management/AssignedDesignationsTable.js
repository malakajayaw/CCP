// JavaScript source code
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AssignedDesignationsTable(props) {
    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                    <table id="AssigneddesignationTable" className="table table-bordered table-striped dataTable">
                        <thead>
                            <tr>
                                <th>Designation Title</th>
                                <th>Designated Member</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Secretary</td>
                                <td>Nimal Perera</td>
                                <td className="project-actions text-center">
                                    <Link to="/AssignMember" type="button" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" />Edit</Link>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Remove </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Cordinator</td>
                                <td>Namal Perera</td>
                                <td className="project-actions text-center">
                                    <a className="btn btn-info btn-sm mr-1" onClick={() => { props.onClick("EditAssignedMemberForm"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Edit  </a>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Remove </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Kumara Sangakkara</td>
                                <td className="project-actions text-center">
                                    <a className="btn btn-info btn-sm mr-1" onClick={() => { props.onClick("EditAssignedMemberForm"); }} href="#">  <i className="fas fa-pencil-alt mr-1" />Edit  </a>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Remove </a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Designation ID</th>
                                <th>Designation Title</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */}
        </div>

    </section>
    );
}


export default AssignedDesignationsTable;
