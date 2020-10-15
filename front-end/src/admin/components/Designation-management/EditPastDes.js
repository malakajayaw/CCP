import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import Select from 'react-select'

import { useForm } from "react-hook-form";

import { update_past_designation, get_spec_past_designations } from '../../controllers/pastdes.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { add_activity } from '../../controllers/activity.controller'
import { get_all_active_members } from "../../controllers/memeber.controller";
import Config from '../../controllers/config.controller'

const EditPastDes = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();


    const newId = id.Id

    const [pastdes, setPastDes] = useState({
        affiliationNo:"",
        title: "",
        MemNo: "",
        Year: "",

    });

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Edit record - Admin",
        table: "Records",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        onLoadMemebrer(newId);
    }, []);

    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();

    }, []);

    async function getMemData() {
        var res = await get_all_active_members();
        await setMember(res.data.data);
        console.log("mem: " + member);
    }

    const selMem = member.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.fname + " " + item.lname + " - " + item._id;
        console.log("sel: " + JSON.stringify(container));
        return container;
    })

    const handleMemChange = (e) => {
        setPastDes({ ...pastdes, "MemNo": e.value });
        console.log(e);
    }

    const handleAffChange = (e) => {
        setPastDes({ ...pastdes, "affiliationNo": e.value });
        console.log(e);
    }

    const onLoadMemebrer = async (newId) => {
        const date = new Date();
        const result = await get_spec_past_designations(newId)
        console.log("reult: " + result.data.data);
        // const newD = result.data.data
        setActivity({
            ...activity,
            datetime: date.toLocaleString()
        });


        await console.log(pastdes);
        setPastDes(result.data.data)
    }




    const onSubmit = async (e) => {
        activity.parameters = pastdes.title + " / " + pastdes.MemNo + " / " + pastdes.Year + " / " + pastdes.affiliationNo;
        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_past_designation(pastdes, id.Id)
        console.log(result);
        const result3 = await add_activity(activity)
        console.log(result3);
        if (result.code == 200) {
            Config.setToast("Update  successfully")
        }



    }

    //  const getData = async  (id) =>{
    //       const result = await
    //  }

    const handleChange = (e) => {
        setPastDes({ ...pastdes, [e.target.name]: e.target.value });
        console.log(pastdes);
    }

    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
        getAffData();
    }, []);

    async function getAffData() {
        var res = await get_all_affiliations();
        await setAffiliations(res.data.data);
        console.log(affiliations);
    }

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
        container["label"] = item.affiliationname + " - " + item._id;
        console.log("sel: " + JSON.stringify(container));
        return container;
    })

    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <h6>Edit Record</h6>
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">

                    <section className="content">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Change Record </h3>
                                    </div>
                                    <form onSubmit={onSubmit}>


                                        <div className="card-body">

                                            <div className="form-group">
                                                <label>Affiliation</label>
                                                <Select required value={pastdes.affiliationNo} className="select2" id="affiliation" name="affiliationNo" placeholder="Select affiliation" style={{ width: "100%" }} onChange={handleAffChange} options={sel} />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Designation Title</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="title"
                                                    value={pastdes.title} />
                                            </div>

                                            <div className="form-group">
                                                <label>Member</label>
                                                <Select required value="" className="select2" id="MemNo" name="MemNo" data-placeholder="Select Member" style={{ width: "100%" }} onChange={handleMemChange} options={selMem} />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Year</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="Year"
                                                    value={pastdes.Year} />
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

export default EditPastDes;
