import axios from "axios";
import Config from "./config.controller";

export const delete_registered_member = (id) => {
    console.log(id);
    var data = {
      id: id,
    };
  
    return new Promise((resolve, reject) => {
      return axios
        .post(`${Config.host}${Config.port}/RegisteredMember/delete`, {
          ...data,
        })
        .then((result) => {
          console.log(result.data);
          resolve({ code: 200, message: result.data });
        })
        .catch((err) => {
          reject({ code: 0, error: err });
        });
    });
};