import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import { update_designation_mem, get_spec_designations } from '../../controllers/designation.controller'
import Config from '../../controllers/config.controller'

const EditAssignedMemberForm = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();


    const newId = id.AssId

    const [Designation, setDesignation] = useState({
        MemNo: "",

    });

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        onLoadMemebrer(newId);
    }, []);



    const onLoadMemebrer = async (newId) => {
        const result = await get_spec_designations(newId)
        console.log("reult: " + result.data.data);
        // const newD = result.data.data

        await console.log(Designation);
        setDesignation(result.data.data)
    }




    const onSubmit = async (e) => {

        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_designation_mem(Designation, id.AssId)
        console.log(result);
        if (result.code == 200) {
            Config.setToast("Update  successfully")
        }



    }

    //  const getData = async  (id) =>{
    //       const result = await
    //  }

    const handleChange = (e) => {
        setDesignation({ ...Designation, [e.target.name]: e.target.value });
        console.log(Designation);
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
                                                    value={Designation.MemNo}
                                                    name="MemNo"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label >Member Name</label>
                                                <input disabled type="text" className="form-control" required name="addfname"
                                                    value="Not implmented"
                                                    name="MemNo"
                                                    onChange={handleChange}
                                                />
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
