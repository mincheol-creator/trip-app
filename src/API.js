import axios from "axios";

axios.defaults.withCredentials = true;
<<<<<<< HEAD
const url = "192.168.0.15:8080"; // Server URL
=======
const url = "localhost:8080"; // Server URL
>>>>>>> eb9a7840dcbebe9c4175f8f5702975d583a3b825

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
