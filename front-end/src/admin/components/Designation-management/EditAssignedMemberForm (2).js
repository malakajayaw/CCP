import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import { update_assignment, get_spec_assignment } from '../../controllers/designationAss.controller'
import Config from '../../controllers/config.controller'

const EditAssignedMemberForm = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();


    const newId = id.AssId

    const [assignment, setAssignment] = useState({
        DesNo:"",
        MemNo: "",
        forYear: "",

    });

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        onLoadMemebrer(newId);
    }, []);



    const onLoadMemebrer = async (newId) => {
        const result = await get_spec_assignment(newId)
        console.log("reult: " + result.data.data);
        // const newD = result.data.data

        await console.log(assignment);
        setAssignment(result.data.data)
    }




    const onSubmit = async (e) => {

        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_assignment(assignment, id.AssId)
        console.log(result);
        if (result.code == 200) {
            Config.setToast("Update  successfully")
        }



    }

    //  const getData = async  (id) =>{
    //       const result = await
    //  }

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
        console.log(assignment);
    }

    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <h6>New Assignment</h6>
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">

                    <section className="content">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Assign New Member </h3>
                                    </div>
                                    <form onSubmit={onSubmit}>


                                        <div className="card-body">
                                            <div className="form-group">
                                                <label >Member ID</label>
                                                <input type="text" className="form-control" required name="addfname"
                                                    value={assignment.MemNo}
                                                    name="MemNo"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input disabled hidden type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="DesNo"
                                                    value={assignment.DesNo} />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Year</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="forYear"
                                                    value={assignment.forYear} />
                                            </div>


                                            <div className="row">
                                                <div className="col-12">
                                                    {/* <button type="button" className="btn btn-secondary" onClick={clear}>Cancel</button> */}
                                                    <button type="submit" className="btn btn-success float-right" >Update Designation </button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>

                                </div>


                            </div>
                        </div>

                    </section>


                </div>
            </div>
        </div>

    </section>);

}

export default EditAssignedMemberForm;
