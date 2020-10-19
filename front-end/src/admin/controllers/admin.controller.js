import axios from "axios";
import Config from "../../web/controllers/config.controller";

export const add_admin = (data) => {

    data = {
        fname : data.addfname  , 
        lname : data.addlname  ,
        memberShipNo : data.addmnumber ,
        email : data.addpemail ,
        contactNo : data.addphone ,
        password : data.addpassword ,
    }
    return new Promise( (resolve,reject) => {
        return axios.post(`${Config.host}${Config.port}/admin/admin` , { ...data })
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
        return axios.post(`${Config.host}${Config.port}/admin/admin/update` , { ...data })
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
export const get_all_admin = () => {

    return new Promise( (resolve,reject) => {
        return axios.get(`${Config.host}${Config.port}/admin/all/admin`)
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
export const sign_controller = (mem, pass) => {

    var data = {
        memberShipNo:mem,
        uPass:pass
    }
    return new Promise( (resolve,reject) => {
        return axios.post (`${Config.host}${Config.port}/member/signin`, {...data})
            .then( result => {
                console.log(result.data);
                    resolve({code : 200 , data : result.data })
            })
            .catch( err => {
                reject({ code : 0 , error : err})
            })
    })
}
