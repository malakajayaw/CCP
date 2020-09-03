// JavaScript source code
import React from 'react';

function ActivityTable(props) {
    return (<section className="content">
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                    <table id="activityTable" className="table table-bordered table-striped dataTable">
                        <thead>
                            <tr>
                                <th>Edited By</th>
                                <th>Action</th>
                                <th>Table</th>
                                <th>Date/Time</th>
                                <th>Parameters</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            <tr>
                                <td>0124</td>
                                <td>Insert</td>
                                <td>Member</td>
                                <td>02/10/2020 18:10:04</td>
                                <td>00076,"Nimal Perera"</td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Edited By</th>
                                <th>Action</th>
                                <th>Table</th>
                                <th>Date/Time</th>
                                <th>Parameters</th>
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


export default ActivityTable;
