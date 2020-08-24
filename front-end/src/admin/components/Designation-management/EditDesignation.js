// JavaScript source code
import React from 'react';

function EditDesignation(props) {
    return (<section className="content w-100" style={{ display: props.display }}>
        <div className="container-fluid d-flex justify-content-center">
            <div className="card card-warning w-50">
                <div className="card-header">
                    <h3 className="card-title">Edit Designation</h3>
                </div>
                {/* name,date,venue,banner,description,volunteers,hosting aff, */}
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form role="form">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="eventName">Designation Name</label>
                            <input type="text" className="form-control" id="eventName" placeholder="Enter Designation Title" required />
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


export default EditDesignation;