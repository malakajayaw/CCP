import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class DesignationTable extends Component {

    constructor(props) {
        super(props);
        this.state = { des: [''] }
    }

    componentDidMount() {
        
        fetch('http://localhost:5000/designations')
            .then(res => res.json())
            .then(des => this.setState({ des }, () => console.log('Designations fetched..', des)));
    };

    render() {
        console.log(this.props);

        return (<section className="content">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <Link to="/AddDesignation" type="button" className="btn btn-info float-right add_btn">Add Designation</Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table id="desTable" className="table table-bordered table-striped dataTable">
                            <thead>
                                <tr>
                                    <th>Designation ID</th>
                                    <th>Branch</th>
                                    <th>Designation Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.des.map(des => <tr key={des.desId} >
                                    <td>{des.desId}</td>
                                    <td>{des.branchName}</td>
                                    <td>{des.desTitle}</td>
                                    <td className="project-actions text-center">
                                        <Link to={"/EditDesignation/" + des.desId} className="btn btn-primary btn-sm mr-1"><i className="fas fa-pencil-alt mr-1" /> Edit</Link>
                                        <Link to="/EventView" className="btn btn-danger btn-sm mr-1"><i className="fas fa-trash mr-1" /> Delete</Link>
                                    </td>
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


export default DesignationTable;
