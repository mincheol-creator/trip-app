import axios from "axios";

axios.defaults.withCredentials = true;
// const url = process.env.REACT_APP_SERVER_URL;
const url = "70.12.227.32:8181";

/*
 * USER
 */

const addCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signup`, {
    email,
    password
  });
};

const getCustomer = (email, password) => {
  console.log(url);
  return axios.post(`http://${url}/customer/signin`, {
    email,
    password
  });
};

const getPreview = () => {
  return axios.post(`http://${url}/product/getProductPreview`, {});
};

const selectProduct = id => {
  return axios.post(`http://${url}/product/getProduct`, {
    id
  });
};
/*
 * CITY
 */

// const getCityInfo = () => {
//     return axios.post(url, {cityname})
// }

export default { addCustomer, getCustomer };
