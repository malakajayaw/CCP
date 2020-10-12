import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import { update_past_designation, get_spec_past_designations } from '../../controllers/pastdes.controller'
import { get_all_affiliations } from "../../controllers/affiliation.controller";
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

    useEffect(() => {
        //console.log("id: " + JSON.stringify(id));
        //console.log("id: " + id.desId);
        onLoadMemebrer(newId);
    }, []);



    const onLoadMemebrer = async (newId) => {
        const result = await get_spec_past_designations(newId)
        console.log("reult: " + result.data.data);
        // const newD = result.data.data

        await console.log(pastdes);
        setPastDes(result.data.data)
    }




    const onSubmit = async (e) => {

        // alert(JSON.stringify(member))
        e.preventDefault()
        const result = await update_past_designation(pastdes, id.Id)
        console.log(result);
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
                                                <label >Affiliation </label>
                                                <input type="text" className="form-control" required name="addfname"
                                                    value={pastdes.affiliationNo}
                                                    name="affiliationNo"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Affiliation</label>
                                                <select className="select2" id="affiliationNo" name="affiliationNo" value={pastdes.affiliationNo } data-placeholder="Select affiliation" style={{ width: "100%" }} onChange={handleChange}>
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
                                                <label for="inputLName">Member ID</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname"
                                                    onChange={handleChange}
                                                    name="MemNo"
                                                    value={pastdes.MemNo} />
                                            </div>

                                            <div className="form-group">
                                                <label for="inputLName">Member Name</label>
                                                <input type="text" id="inputLName" className="form-control" required name="addlname" disabled
                                                    onChange={handleChange}
                                                    name="forYear"
                                                    value="Not yet implemented" />
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
