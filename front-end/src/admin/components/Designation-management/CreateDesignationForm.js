import React, { useState, useEffect } from 'react';

import moment from 'moment';
import Config from '../../controllers/config.controller'
import useForceUpdate from 'use-force-update';

import { addDesignation } from '../../controllers/designation.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";

const CreateDesignationForm = (props) => {
    const forceUpdate = useForceUpdate();

    const [submit, setSubmit] = useState({
        value1: "Not Submitted"
    });
    const [today, setToday] = useState(

    );

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



    let [designation, setDesignation] = useState({
        DesNo: 'not set',
        title: "not set",
        affiliationNo: "not set",
        type: "not set",
        created_at: today,


    });

    const handleChange = (e) => {
        setDesignation({ ...designation, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        console.log(designation);
        const result = await addDesignation(designation)
        console.log(result);
        if (result.code == 200) {
            clear()
            Config.setToast("Designation Added Successfully")
            forceUpdate();

        }



    }


    const clear = () => {
        console.log("Clear call");
        setDesignation({
            DesNo: 'not set',
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
        console.log(affiliations);
    }

    const loadAffData = () => {
        return affiliations.map((affiliations, index) => {
            return (
                <option value={affiliations._id }>{affiliations.affiliationname}</option>
            );
        });
    };


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

                                                <label for="inputFName">Designation Id : </label>
                                                <input type="text" id="DesNo" name="DesNo" class="form-control" onChange={handleChange}/>

                                                <label for="inputFName">Designation Title : </label>
                                                <input type="text" id="title" name="title" class="form-control" onChange={handleChange}/>

                                                <div className="form-group">
                                                    <label>Affiliation</label>
                                                    <select className="select2" id="affiliation" name="affiliationNo" multiple="multiple" data-placeholder="Select affiliation" style={{ width: "100%" }} onChange={handleChange}>
                                                        {loadAffData()}
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label>type</label>
                                                    <select className="select2" id="type" name="type" multiple="multiple" data-placeholder="Select type" style={{ width: "100%" }} onChange={handleChange}>
                                                        <option>Normal</option>
                                                        <option>Chair</option>
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