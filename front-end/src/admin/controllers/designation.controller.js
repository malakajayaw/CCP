import axios from "axios";
import Config from "./config.controller";

//=============================================================================== Add Designation

export const addDesignation = (data) => {
    console.log(data.DesNo);
    data = {
        title: data.title,
        affiliationNo: data.affiliationNo,
        type: data.type,
        updated_at: data.updated_at
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/designations/addDesignations`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data.message })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })

}

//=============================================================================== Get all designations

export const get_all_designations = () => {
    return new Promise((resolve, reject) => {
        return axios.get(`${Config.host}${Config.port}/designations/getDesignations`)
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, data: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}

//=============================================================================== Get spec designations

export const get_spec_designations = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/designations/getSpecDesignations`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, data: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}

//=============================================================================== Delete designation

export const remove_designation = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/designations/deleteDesignations`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}

//=============================================================================== Update designation

export const update_designation = (data, id) => {

    data = {
        id: id,
        title: data.title,
        affiliationNo: data.affiliationNo,
        type: data.type,

    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/designations/updateDesignation`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data.message })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}