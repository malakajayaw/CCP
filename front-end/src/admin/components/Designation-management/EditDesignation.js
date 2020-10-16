import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import Select from 'react-select'

import { useForm } from "react-hook-form";

import { update_designation, get_spec_designations } from '../../controllers/designation.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { add_activity } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'

const EditDesignation = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();

    var selectedaff = "Select affiliaion";

    const newId = id.desId

    const [designation, setDesignation] = useState({

        title: "",
        affiliationNo: "",
        type: "",

    });

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Edit designation",
        table: "Designations",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        onLoadMemebrer(newId);
    }, []);



    const onLoadMemebrer = async (newId) => {
        const date = new Date();
        const result = await get_spec_designations(newId)
        console.log("result: " + result.data.data);
        // const newD = result.data.data
        setActivity({
            ...activity,
            parameters: result.data.data.MemNo,
            datetime: date.toLocaleString()
        });

        await console.log(designation);
        console.log("result: " + JSON.stringify(result.data.data));
        setDesignation(result.data.data)
    }




    const onSubmit = async (e) => {
        activity.parameters = setAffData(designation.affiliationNo) + " / " + designation.title + " / " + designation.type;
        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_designation(designation, id.desId)
        console.log(result);
        const result3 = await add_activity(activity)
        console.log(result3);
        if (result.code == 200) {
            Config.setToast("Update  successfully")
        }



    }

    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
        getAffData();
    }, []);

    async function getAffData() {
        window.selectedaff = "Select affiliaion";
        var res = await get_all_affiliations();
        await setAffiliations(res.data.data);
        console.log(affiliations);
    }

    const setAffData = (id) => {
        return affiliations.map((affiliations, index) => {
            if (id == affiliations._id) {
                return (affiliations.affiliationno + " - " + affiliations.affiliationname);
            }
        });
    };

    const loadAffData = () => {
        return affiliations.map((affiliations, index) => {
            return (
                <option value={affiliations._id}>{affiliations.affiliationname}</option>
            );
        });
    };

    const sel = affiliations.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.affiliationname + " - " + item.affiliationno;
        console.log("sel: " + JSON.stringify(container));
        return container;
    })

    const handleAffChange = (e) => {
        setDesignation({ ...designation, "affiliationNo": e.value });
        console.log(e);
        window.selectedaff = setAffData(e.value);
        aff();
    }

    const handleChange = (e) => {
        setDesignation({ ...designation, [e.target.name]: e.target.value });
        console.log(designation);
    }

    const aff = () => {
        return (
            <Select required value="" className="select2" id="affiliation" name="affiliationNo" placeholder={window.selectedaff} style={{ width: "100%" }} onChange={handleAffChange} options={sel} />
        )
    }

    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <h6>Update Designation</h6>
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
                                                <label>Affiliation</label>
                                                { aff()}
                                            </div>

                                            <div className="form-group">
                                                <label>Type</label>
                                                <select required value= {designation.type} className="select2" id="type" name="type" data-placeholder="Select Type" style={{ width: "100%" }} onChange={handleChange}>
                                                    <option value= "Normal">Normal</option>
                                                    <option value= "Chair">Chair</option>
                                                </select>
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
