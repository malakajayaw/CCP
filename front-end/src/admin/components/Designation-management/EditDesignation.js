import React, { Component } from "react";
import ReactDOM from "react-dom";

class EditDesignation extends Component {

    constructor(props) {
        super(props);
        //this.state = { values: { dtitle: "" }, isSubmitting: false, isError: false }
    }

    componentDidMount() {
        //fetch('http://localhost:5000/designations')
        //    .then(res => res.json())
        //    .then(des => this.setState({ des }, () => console.log('Designations fetched..', des)));
        const mal = this.props.fetch;
        console.log("edit id",mal);
    };

    render() {
        return (<section className="content w-100" >
            <div className="container-fluid d-flex justify-content-center">
                <div className="card card-warning w-50">
                    <div className="card-header">
                        <h3 className="card-title">Edit Designation</h3>
                    </div>
                    {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                    {/* <!-- /.card-header --> */}
                    {/* <!-- form start --> */}
                    <form role="form" id="editdesigname" onSubmit={this.editDesignationSubmit } method="post">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="eventName">Designation Name</label>
                                <input type="text" className="form-control" id="dtitle" name="dtitle" placeholder="Enter Designation Title" required />
                            </div>

                        </div>
                        {/* <!-- /.card-body --> */}

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Edit Designation</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>);
    }

    editDesignationSubmit = e => {
        e.preventDefault();
        let myForm = document.getElementById('editdesigname');
        let formData = new FormData(myForm);
        var object = {};
        formData.forEach((value, key) => { object[key] = value });
        var json = JSON.stringify(object);
        this.setState({ xvalue: json });
        console.log(json);

        fetch('http://localhost:5000/editDesignation', {
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


export default EditDesignation;