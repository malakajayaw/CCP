import axios from "axios";
import Config from "./config.controller";

export const add_event_report = (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append("pdf", data.file);
  formData.set("reportname", data.reportname);
  formData.set("eventname", data.eventname);
  formData.set("created_at", data.date);
  formData.set("submssionState", data.submissionstate);
  formData.set("submissionComment", data.submissioncomment);

  //   var dataSet = {
  //     eventname: data.eventname,
  //     created_at: data.date,
  //     submssionState: data.submissionstate,
  //     submissionComment: data.submissioncomment,
  //   };
  console.log(formData);
  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/eventReport/report/add`, formData)
      .then((result) => {
        console.log(result.data);
        resolve({ code: 200, message: result.data });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};
export const delete_report = (id) => {
  console.log(id);
  var data = {
    id: id,
  };

  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/eventReport/report/delete`, {
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
export const get_spec_report = (id) => {
  console.log(id);
  var data = {
    id: id,
  };
  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/eventReport/report/spec`, { ...data })
      .then((result) => {
        console.log(result.data);
        resolve({ code: 200, message: result.data });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};

export const get_all_reports = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/eventReport/report/all`)
      .then((result) => {
        console.log(result.data);
        resolve({ code: 200, data: result.data });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};
