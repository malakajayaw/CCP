import axios from "axios";
import Config from "./config.controller";

export const add_member_requset = (data) => {

    data = {
        fname : data.addfname  , 
        lname : data.addlname  ,
        nameAsMemberShip : data.addmname  ,
        memberShipNo : data.addmnumber ,
        email : data.addpemail ,
        ieeeMail : data.addoemail ,
        contactNo : data.addphone ,
        password : data.addpassword ,
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/member/requset` , { ...data })
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , message : result.data.message })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}

// 
export const get_all_requsests = () => {

    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/member/all/request`)
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
