import axios from "axios";
import Config from "./config.controller";

//======================================================================================================
//================================== Add confirmed members==============================================
//====================================================================================================== 

export const addEventAttendanceAttended = (data) => {
    console.log(data);
  
    return new Promise((resolve, reject) => {
      return axios
        .post(`${Config.host}${Config.port}/eventattendance/attendance/add_attended_mem`, data)
        .then((result) => {
          console.log(result.data);
          resolve({ code: 200, message: result.data });
        })
        .catch((err) => {
          reject({ code: 0, error: err });
        });
    });
  };
//======================================================================================================
//================================== Get attended members==============================================
//====================================================================================================== 

export const getAttendedMembersForAnEvent = (id) => {

    var data = {
        id:id
    }

    return new Promise( (resolve,reject) => {
        return axios.post (`${Config.host}${Config.port}/eventattendance/attendance/get_attended_mem`, {...data})
            .then( result => {
              //  console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}

//======================================================================================================
//================================== Delete a attended member==============================================
//====================================================================================================== 

export const deleteAttendedMemeber = (id) => { 

    var  datanew = {
         id :id
     }
  
     return new Promise( (resolve,reject) => {
         return axios.post(`${Config.host}${Config.port}/eventattendance/attendance/delete_attended_mem` , { ...datanew })
             .then( result => {
                //  console.log(result.data);
                     resolve({code : 200 , message : result.data.message })
             })
             .catch( err => {
                 reject({ code : 0 , error : err})
             })
     })
 }
