import React,{Component} from 'react';

class ManageAffiliation extends Component {


    render() {
        return (<section className="content w-100">
            <div className="container-fluid d-flex justify-content-center">
                <div className="card card-warning w-50">
                    <div className="card-header">
                    <h3 className="card-title">Edit Student Branch</h3>
                    </div>
                    {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                    {/* <!-- /.card-header --> */}
                    {/* <!-- form start --> */}
                    <form role="form" id="affiliationform" onSubmit={this.affiliation} method="post">
                        
                        <div className="card-body">

                        <div className="form-group">
                                <label>Affiliation Type</label>
                                <select className="select2" id="affiliation" name="affiliationtype" multiple="multiple" data-placeholder="Select affiliation Type" style={{ width: "100%" }}>
                                    <option>Type 1</option>
                                    <option>Type 2 </option>
                                    <option>Type 3 </option>
                                    <option>Type 4 </option>
                                    <option>Type 5 </option>
                                    <option>Type 6</option>
                                    <option>Type 7</option>
                                </select>
                            </div>




                            <div className="form-group">
                            <label htmlFor="sbranchname">Student Branch Name</label>
                                <input type="text" className="form-control" id="sbranchname" name="sbranchname" placeholder="Enter student branch name" required />
                            </div>


                            <div className="form-group">
                            <label htmlFor="affiliationno">IEEE Affiliation Number</label>
                                <input type="text" className="form-control" id="affiliationno" name="affiliationno" placeholder="Enter IEEE affiliation number" required />
                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="sbranchdate">Date of formation</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="far fa-clock"></i></span>
                                </div>
                                <input type="text" className="form-control" id="sbranchdate" name="sbranchdate" placeholder="Enter Date of formation" required />
                                </div>
                            </div>


                            

                        </div>
                        {/* <!-- /.card-body --> */}

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Add Affiliation</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>);
    }

    affiliation = e => {
        e.preventDefault();
        let myForm = document.getElementById('affiliationform');
        let formData = new FormData(myForm);
        var object = {};
        formData.forEach((value, key) => { object[key] = value });
        var json = JSON.stringify(object);
        this.setState({ xvalue: json });
        console.log(json);

        fetch('http://localhost:5000/addAffiliation', {
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

export default ManageAffiliation;
