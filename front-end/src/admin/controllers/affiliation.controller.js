import axios from "axios";
import Config from "./config.controller";

// export const add_affiliation = (data) => {

//     data = {

//         affiliationtype : data.affiliationtype  ,
//         affiliationname : data.affiliationname ,
//         affiliationno : data.affiliationno ,
//         date : data.date ,

//      }
//      return new Promise( (resolve,reject) => {
//          return axios.post(`${Config.host}${Config.port}/affiliation/addAffiliation` , { ...data })
//              .then( result => {
//                  console.log(result.data);
//                      resolve({code : 200 , message : result.data.message })
//              })
//              .catch( err => {
//                  reject({ code : 0 , error : err})
//              })
//      })

//  }

export const get_all_affiliation = () => {
    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/affiliation/all/affiliation`)
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
