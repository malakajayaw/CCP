import axios from "axios";
import Config from "./config.controller";

export const addDesignation = (data) => {
    console.log(data.DesNo);
    data = {
        DesNo: data.DesNo,
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

export const remove_designation = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/designations/delete`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}