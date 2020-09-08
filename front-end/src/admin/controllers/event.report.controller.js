import axios from "axios";
import Config from "./config.controller";

export const add_event_report = (data) => {
    console.log(data);
   var  dataSet = {
    eventname: data.eventname,
    created_at: data.date,
    submssionState: data.submissionstate,
    submissionComment:data.submissioncomment,
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/event/report/add` , { ...dataSet })
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , message : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
export const delete_report = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/event/report/delete` , { ...data })
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , message : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
export const get_spec_report = (id) => {
    console.log(id);
    var data = {
        id: id
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/event/report/spec` , { ...data })
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , message : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}


export const get_all_reports = () => {

    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/event/report/all`)
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
