import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import Select from 'react-select'
import { useForm } from "react-hook-form";

//controllers
import { update_past_designation, get_spec_past_designations } from '../../controllers/pastdes.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { get_aff_spec_members } from "../../controllers/designation.controller";
import { add_activity } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'

const EditPastDes = (props) => {

    //get passed parameters
    const id = useParams()
    const newId = id.Id
    var affil = "5f85d364b708c81ce0a4de86";

    //variable to store past designations
    const [pastdes, setPastDes] = useState({
        affiliationNo:"",
        title: "",
        MemNo: "",
        Year: "",
    });

    //variable to store activities
    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Edit record - Chair",
        table: "Records",
        parameters: "not set",
        datetime: "not set"
    });

    useEffect(() => {
        onLoadMemebrer(newId);
    }, []);

    //variable to store members
    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();
    }, []);

    //get members from specific affiliation from data base
    async function getMemData() {
        window.selectedmem = "Select member";
        var res = await get_aff_spec_members(affil);
        await setMember(res.data.data);
    }

    //get member data for a given _id
    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname + " - " + member.memberShipNo);
            }
        });
    };

    //set options for select to show members
    const selMem = member.map(item => {
        const container = {};
        container["value"] = item._id;
        container["label"] = item.memberShipNo + " - " + item.fname + " " + item.lname;
        return container;
    })

    //handle form changes - for members select
    const handleMemChange = (e) => {
        setPastDes({ ...pastdes, "MemNo": e.value });
        window.selectedmem = setMemData(e.value);
        mem();
    }

    //runs when loading the form
    const onLoadMemebrer = async (newId) => {
        //get date info
        const date = new Date();
        //get specific past designation data
        const result = await get_spec_past_designations(newId)
        //set data for activity log
        setActivity({
            ...activity,
            datetime: date.toLocaleString()
        });
        //set data for past designation
        setPastDes(result.data.data)
    }

    //runs on submit
    const onSubmit = async (e) => {
        //set parameters for activity variable
        activity.parameters = pastdes.title + " / " + setMemData(pastdes.MemNo) + " / " + pastdes.Year + " / " + setAffData(pastdes.affiliationNo);
        e.preventDefault()
        //update past designation
        const result = await update_past_designation(pastdes, id.Id)
        //add activity to database
        const result3 = await add_activity(activity)
        if (result.code == 200) {
            Config.setToast("Updated successfully")
        }
    }

    //handle form changes - member
    const handleChange = (e) => {
        setPastDes({ ...pastdes, [e.target.name]: e.target.value });
    }

    //variable to store affiliations
    const [affiliations, setAffiliations] = useState([]);
    useEffect(() => {
        getAffData();
    }, []);

    //get all the affiliations from the database
    async function getAffData() {
        var res = await get_all_affiliations();
        await setAffiliations(res.data.data);
    }

    //get affiliation data for a given _id
    const setAffData = (id) => {
        return affiliations.map((affiliations, index) => {
            if (id == affiliations._id) {
                return (affiliations.affiliationno + " - " + affiliations.affiliationname);
            }
        });
    };

    //set options for select to show affiliations
    const loadAffData = () => {
        return affiliations.map((affiliations, index) => {
            return (
                <option value={affiliations._id}>{affiliations.affiliationname}</option>
            );
        });
    };

    //select for members
    const mem = () => {
        return (
            <Select required value="" className="select2" id="MemNo" name="MemNo" placeholder={window.selectedmem} style={{ width: "100%" }} onChange={handleMemChange} options={selMem} />
        )
    }

    //render form
    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <div className="card">
                <div className="card-body">

                    <section className="content">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit Record </h3>
                                    </div>
                                    <form onSubmit={onSubmit}>


                                        <div className="card-body">
                                            

                                            <div className="form-group">
                                                <select required hidden className="select2" id="affiliationNo" name="affiliationNo" value={pastdes.affiliationNo} data-placeholder="Select affiliation" style={{ width: "100%" }} onChange={handleChange} disabled>
                                                    {loadAffData()}
                                                </select>
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
                                                { mem()}
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
