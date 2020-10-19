import axios from "axios";
import Config from "./config.controller";


export const sign_controller = (mem, pass) => {

    var data = {
        memberShipNo: mem,
        uPass: pass
    }
    return new Promise((resolve, reject) => {
        return axios.post(`${Config.host}${Config.port}/admin/signin`, { ...data })
            .then(result => {
                console.log(result.data);
                resolve({ code: 200, data: result.data })
            })
            .catch(err => {
                reject({ code: 0, error: err })
            })
    })
}


export const add_member_requset = (data) => {

    data = {
        fname : data.addfname  , 
        lname : data.addlname  ,
        nameAsMemberShip : data.addmname  ,
        memberShipNo : data.addmnumber ,
        affiID: data.selectaffiID,
        affiliationname: data.selectaffiliationname,
        email : data.addpemail,
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
export const update_member = (data, id) => {
    
    data = {
        id: id,
        fname : data.fname  , 
        lname : data.lname  ,
        memberShipNo : data.memberShipNo,
        email : data.email ,
        contactNo : data.contactNo ,
        
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/member/mem/update` , { ...data })
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , message : result.data.message })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}





export const accept_or_reject = (data) => {

   var  datanew = {
        memberShipNo :data.memberShipNo,
        state : data.state
    }
    console.log(datanew);
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/member/req/action` , { ...datanew })
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


export const get_all_active_members = () => {

    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/member/all/active`)
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
export const get_specific_mem = (id) => {

    var data = {
        id:id
    }
    return new Promise( (resolve,reject) => {
        return axios.post (`${Config.host}${Config.port}/member/specif/member`, {...data})
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
