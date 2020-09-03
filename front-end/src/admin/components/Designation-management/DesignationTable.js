// JavaScript source code
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DesignationTable(props) {
    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                    <Link to="/AddDesignation" type="button" className="btn btn-info float-right add_btn">Add Designation</Link>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                    <table id="designationTable" className="table table-bordered table-striped dataTable">
                        <thead>
                            <tr>
                                <th>Designation ID</th>
                                <th>Branch</th>
                                <th>Designation Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SB 1</td>
                                <td>Secretary</td>
                                <td className="project-actions text-center">
                                    <Link to="/EditDesignation" type="button" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" />Edit</Link>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Delete </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SB 1</td>
                                <td>Cordinator</td>
                                <td className="project-actions text-center">
                                    <Link to="/EditDesignation" type="button" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" />Edit</Link>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Delete </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SB 2</td>
                                <td>Treasurer</td>
                                <td className="project-actions text-center">
                                    <Link to="/EditDesignation" type="button" className="btn btn-info btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" />Edit</Link>
                                    <a className="btn btn-danger btn-sm mr-1" href="#"> <i className="fas fa-trash mr-1" />Delete </a>
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


export default DesignationTable;
