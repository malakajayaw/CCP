// JavaScript source code
import React from 'react';

function CreateDesignationForm(props) {
    return (<section className="content w-100" style={{ display: props.display }}>
        <div className="container-fluid d-flex justify-content-center">
            <div className="card card-warning w-50">
                <div className="card-header">
                    <h3 className="card-title">Create New Designation</h3>
                </div>
                {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form role="form">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="eventName">Designation Title</label>
                            <input type="text" className="form-control" id="eventName" placeholder="Enter designation" required />
                        </div>
                        
                        <div className="form-group">
                            <label>Affiliation</label>
                            <select className="select2" multiple="multiple" data-placeholder="Select volunteers" style={{ width: "100%" }}>
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


export default CreateDesignationForm;