import React, { Component } from "react";
import ReactDOM from "react-dom";

class EditAssignedMemberForm extends Component {

    constructor(props) {
        super(props);
        //this.state = { values: { mname: "" }, isSubmitting: false, isError: false }
    }

    render() {
        return (<section className="content w-100">
            <div className="container-fluid d-flex justify-content-center">
                <div className="card card-warning w-50">
                    <div className="card-header">
                        <h3 className="card-title">Edit Assigned Member</h3>
                    </div>
                    {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                    {/* <!-- /.card-header --> */}
                    {/* <!-- form start --> */}
                    <form role="form" onSubmit={this.editAssignedMemberSubmit} id="editassigneddes" method = "post">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="eventName">Member Name</label>
                                <input type="text" className="form-control" id="mname" name="mname" placeholder="Enter member name" required />
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

    editAssignedMemberSubmit = e => {
        e.preventDefault();
        let myForm = document.getElementById('editassigneddes');
        let formData = new FormData(myForm);
        var object = {};
        formData.forEach((value, key) => { object[key] = value });
        var json = JSON.stringify(object);
        this.setState({ xvalue: json });
        console.log(json);

        fetch('http://localhost:5000/editAssignedMem', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })

    }
    

}
export default EditAssignedMemberForm;