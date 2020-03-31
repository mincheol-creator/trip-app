/*
 * USER
 */

import axios from "axios";

axios.defaults.withCredentials = true;

const url = "172.30.1.9:8080";

const addCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signup`, {
    email,
    password
  });
};

const getCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signin`, {
    email,
    password
  });
};

/*
 * CITY
 */

// const getCityInfo = () => {
//     return axios.post(url, {cityname})
// }

export default { addCustomer, getCustomer };
