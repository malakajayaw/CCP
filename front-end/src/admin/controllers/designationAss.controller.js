import axios from "axios";
import Config from "./config.controller";

export const addAssignment = (data) => {

    data = {
        AssNo: data.AssNo,
        DesNo: data.DesNo,
        title: data.title,
        MemNo: data.MemNo,
        forYear: data.forYear,
        AssBy: data.AssBy,
        updated_at: data.updated_at,
        created_at: data.created_at,
        state: data.state
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/assignments/addAssignment`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data.message })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })

}

export const get_all_assignments = () => {
    return new Promise((resolve, reject) => {
        return axios.get(`${Config.host}${Config.port}/assignments/getAssignments`)
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, data: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}

export const remove_assignment = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/assignments/delete`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, message: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}