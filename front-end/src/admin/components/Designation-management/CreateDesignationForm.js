import React, { Component } from "react";

class CreateDesignationForm extends Component {

    constructor(props) {
        super(props);
        //this.state = { values: { dtitle: "", affiliation:"" }, isSubmitting: false, isError: false }
    }

    render() {
        return (<section className="content w-100">
            <div className="container-fluid d-flex justify-content-center">
                <div className="card card-warning w-50">
                    <div className="card-header">
                        <h3 className="card-title">Create New Designation</h3>
                    </div>
                    {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                    {/* <!-- /.card-header --> */}
                    {/* <!-- form start --> */}
                    <form role="form" id="createdes" onSubmit={this.createDesignationSubmit} method="post">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="eventName">Designation Title</label>
                                <input type="text" className="form-control" id="dtitle" name="dtitle" placeholder="Enter designation" required />
                            </div>

                            <div className="form-group">
                                <label>Affiliation</label>
                                <select className="select2" id="affiliation" name="affiliation" multiple="multiple" data-placeholder="Select affiliation" style={{ width: "100%" }}>
                                    <option>SB 1</option>
                                    <option>SB 2</option>
                                    <option>SB 3</option>
                                    <option>SB 4</option>
                                </select>
                            </div>

                        </div>
                        {/* <!-- /.card-body --> */}

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Add Designation</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>);
    }

    createDesignationSubmit = e => {
        e.preventDefault();
        let myForm = document.getElementById('createdes');
        let formData = new FormData(myForm);
        var object = {};
        formData.forEach((value, key) => { object[key] = value });
        var json = JSON.stringify(object);
        this.setState({ xvalue: json });
        console.log(myForm);
        console.log(formData);
        console.log(object);
        console.log(json);
    }

}


export default CreateDesignationForm;