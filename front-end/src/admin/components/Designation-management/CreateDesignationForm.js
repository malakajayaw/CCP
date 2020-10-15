import React, { useState, useEffect } from 'react';
import Select from 'react-select'

import moment from 'moment';
import Config from '../../controllers/config.controller'
import useForceUpdate from 'use-force-update';

import { addDesignation } from '../../controllers/designation.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
import { add_activity } from '../../controllers/activity.controller'

const CreateDesignationForm = (props) => {
    const forceUpdate = useForceUpdate();
    const [submit, setSubmit] = useState({
        value1: "Not Submitted"
    });
    const [today, setToday] = useState(

    );
    var temp;
    const todayfucn = () => {
        let newDate = new Date()

        const today = newDate.toLocaleString();
        setToday(today)

        console.log(today);
    }


    useEffect(() => {
        let newDate = new Date()

        const today = newDate.toLocaleString();
        setToday(today)
        todayfucn()
    });

    let [designation, setDesignation] = useState({
        title: "not set",
        affiliationNo: "not set",
        type: "not set",
        created_at: today,


    });

    let [activity, setActivity] = useState({
        MemNo: "To be taken from redux",
        action: "New Designation",
        table: "Designations",
        parameters: "not set",
        datetime: ""
    });

    const handleChange = (e) => {
        setDesignation({ ...designation, [e.target.name]: e.target.value });
    }

    const handleAffChange = (e) => {
        setDesignation({ ...designation, "affiliationNo": e.value });
        console.log(e);
    }

    const onSubmit = async (e) => {
        const date = new Date();
        e.preventDefault()
        //console.log("des" + JSON.stringify(designation.affiliationNo));
        const result = await addDesignation(designation)
        await console.log(result);
        const det = designation.affiliationNo + "/" + designation.title + "/" + designation.type
        activity.parameters = det;
        activity.datetime = date.toLocaleString();
        console.log("act" + JSON.stringify(activity));
        const result3 = await add_activity(activity)
        console.log(result3);
        if (result.code == 200) {
            clear()
            Config.setToast("Designation Added Successfully")
            forceUpdate();

        }



    }

    const clear = () => {
        console.log("Clear call");
        setDesignation({
            title: "not set",
            affiliationNo: "not set",
            type: "not set",
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
        console.log("aff: " + affiliations);
    }

    const sel = affiliations.map(item => {
        const container = {};

        container["value"] = item._id;
        container["label"] = item.affiliationname + " - " + item.affiliationno;
        console.log("sel: " + JSON.stringify(container));
        return container;
    })

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


                                                <label for="inputFName">Designation Title : </label>
                                                <input required type="text" id="title" name="title" class="form-control" onChange={handleChange} />
                                                
                                                <div className="form-group">
                                                    <label>Affiliation</label>
                                                    <Select required value = "" className="select2" id="affiliation" name="affiliationNo" data-placeholder="Select affiliation" style={{ width: "100%" }} onChange={handleAffChange} options={sel} />
                                                </div>

                                                <div className="form-group">
                                                    <label>type</label>
                                                    <select required className="select2" id="type" name="type" data-placeholder="Select type" style={{ width: "100%" }} onChange={handleChange}>
                                                        <option value="" disabled selected hidden value = "">Select type</option>
                                                        <option value= "Normal">Normal</option>
                                                        <option value="Chair">Chair</option>
                                                    </select>
                                                </div>

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

export default CreateDesignationForm;