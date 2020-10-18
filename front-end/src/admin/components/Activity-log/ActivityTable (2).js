import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { add_activity, get_all_activities } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'

class ActivityTable extends Component {


    constructor(props) {
        super(props);
        this.state = { act: [''] }
    }

    componentDidMount() {

        fetch('http://localhost:5000/activitylog')
            .then(res => res.json())
            .then(act => this.setState({ act }, () => console.log('Activity log fetched..', act)));
    };

    render() {
        console.log(this.props);

        return (<section className="content">
            <div className="container-fluid">
                <div className="card">
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table id="desTable" className="table table-bordered table-striped dataTable">
                            <thead>
                                <tr>
                                    <th>Member ID</th>
                                    <th>Action</th>
                                    <th>Table Title</th>
                                    <th>Date & Time</th>
                                    <th>Parameters</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.act.map(act => <tr key={act.actId} >
                                    <td>{act.editId}</td>
                                    <td>{act.activity}</td>
                                    <td>{act.table}</td>
                                    <td>{act.date}</td>
                                    <td>{act.param}</td>
                                </tr>)}

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Designation ID</th>
                                    <th>Branch</th>
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
}


export default ActivityTable;
