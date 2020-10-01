import axios from "axios";
import Config from "./config.controller";

// export const add_event = (data) => {

//     data = {
//         eventName : data.eventName  , 
//         eventDate : data.eventDate  ,
//         startTime : data.startTime ,
//         endTime : data.endTime ,
//         venue : data.venue ,
//         description : data.description ,
//         hostingAffiliation : data.hostingAffiliation ,
//         volunteers : data.volunteers,
//         banner:data.banner
//     }
//     return new Promise( (resolve,reject) => {
//         return axios.post(`${Config.host}${Config.port}/event/addEvent` , { ...data })
//             .then( result => {
//                 console.log(result.data);
//                     resolve({code : 200 , message : result.data.message })
//             })
//             .catch( err => {
//                 reject({ code : 0 , error : err})
//             })
//     })

// }

export const get_all_events = () => {
    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/event/all/events`)
            .then( result => {
                // console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}

export const get_event = (id) => {
    var data = {
        id:id
    }
    return new Promise( (resolve,reject) => {
        return axios.post (`${Config.host}${Config.port}/event/specificEvent`, {...data})
            .then( result => {
              //  console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
