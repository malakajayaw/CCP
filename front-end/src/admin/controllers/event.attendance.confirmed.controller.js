import axios from "axios";
import Config from "./config.controller";


export const addEventAttendanceConfirmed = (data) => {
    return new Promise((resolve, reject) => {
      return axios
     
        .post(`${Config.host}${Config.port}/eventattendance/attendance/add_confirmed_mem`, data)
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
//================================== Get confirmed members==============================================
//====================================================================================================== 

export const getConfirmedMembersForAnEvent = (id) => {

    var data = {
        id:id
    }

    return new Promise( (resolve,reject) => {
        return axios.post (`${Config.host}${Config.port}/eventattendance/attendance/get_confirm_mem`, {...data})
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
//================================== Decline a confirmed member==============================================
//====================================================================================================== 

export const removeEventAttendanceConfirmed = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      return axios
        .post(`${Config.host}${Config.port}/eventattendance/attendance/delete_confirmed_mem`, data)
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
//================================== Delete a confirmed member==============================================
//====================================================================================================== 

export const deleteRegisteredMember = (id) => {

    var  datanew = {
         id :id
     }
  
     return new Promise( (resolve,reject) => {
         return axios.post(`${Config.host}${Config.port}/eventattendance/attendance/delete_reg_mem` , { ...datanew })
             .then( result => {
                //  console.log(result.data);
                     resolve({code : 200 , message : result.data.message })
             })
             .catch( err => {
                 reject({ code : 0 , error : err})
             })
     })
 }
