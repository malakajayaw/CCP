import React, { useState, useEffect } from 'react';
import Select from 'react-select'

import moment from 'moment';
import Config from '../../controllers/config.controller'
import useForceUpdate from 'use-force-update';

import { addPastDesignation } from '../../controllers/pastdes.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { get_all_members } from "../../controllers/designation.controller";
import { add_activity } from '../../controllers/activity.controller'

const CreateRecord = (props) => {
    const forceUpdate = useForceUpdate();

    const [submit, setSubmit] = useState({
        value1: "Not Submitted"
    });
    const [today, setToday] = useState(

    );

    var selectedaff = "Select affiliaion";
    var selectedmem = "Select member";

    const todayfucn = () => {
        let newDate = new Date()

        const today = moment(newDate).format("MMM Do YY");
        setToday(today)

        console.log(today);
    }


    useEffect(() => {
        let newDate = new Date()
        const today = moment(newDate).format("MMM Do YY");
        setToday(today)
        todayfucn()
    });



    let [pastdes, setPastDes] = useState({
        title: "",
        affiliationNo: "",
        MemNo: "",
        Year: "",
        created_at: today,


    });

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "Edit Record - Admin",
        table: "Records",
        parameters: "not set",
        datetime: ""
    });

    const [member, setMember] = useState([]);
    useEffect(() => {
        getMemData();

    }, []);

    async function getMemData() {
        window.selectedaff = "Select affiliaion";
        window.selectedmem = "Select member";
        var res = await get_all_members();
        await setMember(res.data.data);
        console.log("mem: " + member);
    }
    
    const setMemData = (id) => {
        return member.map((member, index) => {
            if (id == member._id) {
                return (member.fname + " " + member.lname + " - " + member.memberShipNo);
            }
        });
    };

    const selMem = member.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.memberShipNo + " - " + item.fname + " " + item.lname;
        return container;
    })

    const handleChange = (e) => {
        setPastDes({ ...pastdes, [e.target.name]: e.target.value });
    }

    const handleAffChange = (e) => {
        setPastDes({ ...pastdes, "affiliationNo": e.value });
        console.log(e);
        window.selectedaff = setAffData(e.value);
        aff();
    }

    const handleMemChange = (e) => {
        setPastDes({ ...pastdes, "MemNo": e.value });
        console.log("e:" + e.value);
        window.selectedmem = setMemData(e.value);
        mem();

    }

    const onSubmit = async (e) => {
        const date = new Date();
        e.preventDefault()
        console.log(pastdes);
        if (pastdes.affiliationNo == "") {
            Config.setToast("Select affiliation")
        }
        if (pastdes.MemNo == "") {
            Config.setToast("Select Member")
        }
        else {
            const result = await addPastDesignation(pastdes)
            console.log(result);
            const det = pastdes.title + "/" + setMemData(pastdes.MemNo) + "/" + pastdes.Year + " / " + setAffData(pastdes.affiliationNo)
            activity.parameters = det;
            activity.datetime = date.toLocaleString();
            console.log("act" + JSON.stringify(activity));
            const result3 = await add_activity(activity)
            console.log(result3);
            if (result.code == 200) {
                clear()
                Config.setToast("Record Added Successfully")
                forceUpdate();

            }
        }

    }

    const clear = () => {
        console.log("Clear call");
        setPastDes({
            title: "",
            affiliationNo: "",
            MemNo: "",
            Year: "",
            created_at: today,
        })
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
                <option value={affiliations._id }>{affiliations.affiliationname}</option>
            );
        });
    };

    const setAffData = (id) => {
        return affiliations.map((affiliations, index) => {
            if (id == affiliations._id) {
                return (affiliations.affiliationno + " - " + affiliations.affiliationname);
            }
        });
    };

    const sel = affiliations.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.affiliationname + " - " + item.affiliationno;
        return container;
    })

    const mem = () => {
        return (
            <Select required value="" className="select2" id="MemNo" name="MemNo" placeholder={window.selectedmem} style={{ width: "100%" }} onChange={handleMemChange} options={selMem} />
        )
    }

    const aff = () => {
        return (
            <Select required value="" className="select2" id="affiliation" name="affiliationNo" placeholder={window.selectedaff} style={{ width: "100%" }} onChange={handleAffChange} options={sel} />
        )
    }

    return (<section className="content" style={{ display: props.display }}>
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    {/* <!-- <h3 className="card-title">DataTable with default features</h3> --> */}
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">

                    <section class="content">
                        <div class="row justify-content-md-center">
                            <div class="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title pb-1 mb-1" style={{ fontWeight: '600' }}>Add new Designation</h3>

                                    </div>

                                    <div class="card-body">

                                        <form onSubmit={onSubmit}>
                                            <div class="form-group">

                                                <div className="form-group">
                                                    <label>Affiliation</label>
                                                    { aff()}
                                                </div>

                                                <label for="inputFName"> Designation Title : </label>
                                                <input required type="text" id="title" name="title" class="form-control" onChange={handleChange} />

                                                <div className="form-group">
                                                    <label>Member</label>
                                                    { mem()}
                                                </div>

                                                <label for="inputFName">Year : </label>
                                                <input required type="text" id="Year" name="Year" class="form-control" onChange={handleChange} />

                                                <div class="card-footer" style={{ padding: '0px ' }}>
                                                    {/* <button type="button" class="btn btn-default float-right">Clear</button> */}
                                                    <button type="submit" class="btn btn-info">Add Submission</button>
                                                </div>
                                            </div>


                                        </form>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
            {/* <!-- /.container-fluid --> */}
        </div>
        {console.log("bye")}
    </section>);
}

export default CreateRecord;