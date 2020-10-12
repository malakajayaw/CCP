import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import { update_designation, get_spec_designations } from '../../controllers/designation.controller'
import Config from '../../controllers/config.controller'

const EditDesignation = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();


    const newId = id.desId

    const [designation, setDesignation] = useState({

        title: "",
        affiliationNo: "",
        type: "",

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

        await console.log(designation);
        setDesignation(result.data.data)
    }




    const onSubmit = async (e) => {

        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_designation(designation, id.desId)
        console.log(result);
        if (result.code == 200) {
            Config.setToast("Update  successfully")
        }



    }

    //  const getData = async  (id) =>{
    //       const result = await
    //  }

    const handleChange = (e) => {
        setDesignation({ ...designation, [e.target.name]: e.target.value });
        console.log(designation);
    }

    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <h6>Update Member Details</h6>
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">

                    <section className="content">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit Designation</h3>
                                    </div>
                                    <form onSubmit={onSubmit}>


                                        <div className="card-body">
                                            <div className="form-group">
                                                <label >Title</label>
                                                <input type="text" className="form-control" required name="addfname"
                                                    value={designation.title}
                                                    name="title"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Affiliation ID</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="affiliationNo"
                                                    value={designation.affiliationNo} />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Type</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="type"
                                                    value={designation.type} />
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

export default EditDesignation;
