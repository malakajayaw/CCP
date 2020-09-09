import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AssignedDesignationsTable extends Component {

    constructor(props) {
        super(props);
        this.state = { assd: [''] }
    }

    componentDidMount() {

        fetch('http://localhost:5000/assigndesignations')
            .then(res => res.json())
            .then(assd => this.setState({ assd }, () => console.log('Assigned designations fetched..', assd)));
    };

    render() {
        console.log(this.props);
        return (<section className="content">

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table id="AdesTable" className="table table-bordered table-striped dataTable">
                            <thead>
                                <tr>
                                    <th>Designation Title</th>
                                    <th>Designated Member</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.assd.map(assd => <tr key={assd.assdId} >
                                    <td>{assd.dTitle}</td>
                                    <td>{assd.dMem}</td>
                                    <td className="project-actions text-center">
                                        <Link to={"/EditDesignation/" + assd.assdId} className="btn btn-primary btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" /> Edit</Link>
                                        <Link to="/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1" /> Delete</Link>
                                    </td>
                                </tr>)}

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Designation Title</th>
                                    <th>Designated Member</th>
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


export default AssignedDesignationsTable;
