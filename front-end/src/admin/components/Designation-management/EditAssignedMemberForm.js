import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import Select from 'react-select'

import { useForm } from "react-hook-form";

import moment from 'moment';
import { update_designation_mem, get_spec_designations, get_aff_spec_members } from '../../controllers/designation.controller'
import { addPastDesignation } from '../../controllers/pastdes.controller'
import { add_activity } from '../../controllers/activity.controller'
import Config from '../../controllers/config.controller'

const EditAssignedMemberForm = (props) => {

    const id = useParams()
    const { register, handleSubmit } = useForm();

    var selectedmem = "Select member";

    const newId = id.AssId
    var affil = "5f85d364b708c81ce0a4de86";

    const [Designation, setDesignation] = useState({
        MemNo: "",
    });

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        
        onLoadMemebrer(newId);
    }, []);

    let [pastdes, setPastDes] = useState({
        title: "not set",
        affiliationNo: "not set",
        MemNo: "not set",
        Year: "not set",
        created_at: "not set",


    });

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "New assignment",
        table: "Designations",
        parameters: "not set",
        datetime: "not set"
    });

    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();

    }, []);

    async function getMemData() {
        window.selectedmem = "Select member";
        var res = await get_aff_spec_members(affil);
        await setMember(res.data.data);
        console.log("mem: " + member);
    }

    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname + " - " + member.memberShipNo);
            }
            else {
                return ("");
            }
        });
    };

    const selMem = member.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.memberShipNo + " - " + item.fname + " " + item.lname;
        console.log("sel: " + JSON.stringify(container));
        return container;
    })

    const handleMemChange = (e) => {
        setPastDes({ ...pastdes, "MemNo": e.value });
        console.log(e);
    }

    const onLoadMemebrer = async (newId) => {
        const date = new Date();
        const currentYear = new Date().getFullYear();
        const result = await get_spec_designations(newId)
        console.log(currentYear);
        // const newD = result.data.data

        setDesignation(result.data.data)
        await console.log("Destination: " + JSON.stringify(Designation.MemNo));
        setPastDes({
            ...pastdes,
            title: result.data.data.title,
            affiliationNo: result.data.data.affiliationNo,
            Year: currentYear.toString(),
            created_at: date.toLocaleString()
        });
        setActivity({
            ...activity,
            parameters: result.data.data.MemNo,
            datetime: date.toLocaleString()
        });
        //setPastDes({ ...pastdes, affiliationNo: result.data.data.affiliationNo });
    }

    const onSubmit = async (e) => {

         //alert(JSON.stringify(member))
        e.preventDefault()
        const det = setMemData(Designation.MemNo) + " / " + Designation.title;
        console.log("det: " + det);
        activity.parameters = JSON.stringify(det);
        const result = await update_designation_mem(Designation, id.AssId)
        console.log(result);
        const result2 = await addPastDesignation(pastdes)
        console.log(result2);
        console.log("activity" + JSON.stringify(activity));
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
        setActivity({ ...activity, parameters: e.value});
        setPastDes({ ...pastdes, MemNo: e.value });
        setDesignation({ ...Designation, MemNo: e.value });
        console.log("activity" + JSON.stringify(activity));
        console.log("Designation" + JSON.stringify(Designation));
        console.log("pastdes" + JSON.stringify(pastdes));
        window.selectedmem = setMemData(e.value);
        mem();
    }

    const mem = () => {
        return (
            <Select required value="" className="select2" id="MemNo" name="MemNo" placeholder={window.selectedmem} style={{ width: "100%" }} onChange={handleChange} options={selMem} />
        )
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
                                                <label>Member</label>
                                                { mem()}
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
