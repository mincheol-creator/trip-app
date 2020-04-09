import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

// const url = process.env.REACT_APP_SERVER_URL;
const url = "70.12.226.41:8181";
// const url = "70.12.227.32:8181";

/*
 * USER
 */

const addCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signup`, {
    headers,
    email,
    password,
  });
};

const getCustomer = (email, password) => {
  console.log(url);
  return axios.post(`http://${url}/customer/signin`, {
    headers,
    email,
    password,
  });
};

const getCityPreview = () => {
  return axios.post(`http://${url}/product/getCityPreview`, { headers });
};

const getTourPreview = () => {
  return axios.post(`http://${url}/product/getTourPreview`, { headers });
};

const getTicketPreview = () => {
  return axios.post(`http://${url}/product/getTicketPreview`, { headers });
};

const getCityDetailPreview = (sendCityName) => {
  return axios.post(`http://${url}/product/getCityDetailPreview`, {
    headers,
    sendCityName,
  });
};

const getPreview = () => {
  return axios.post(`http://${url}/product/getProductPreview`, { headers });
};

const selectProduct = (sendProductID) => {
  return axios.post(`http://${url}/product/selectProduct`, {
    headers,
    sendProductID,
  });
};
/*
 * CITY
 */

// const getCityInfo = () => {
//     return axios.post(url, {cityname})
// }

const getKakaoLogin = () => {
  window.location.href = `http://${url}/kakao`;
};

const getKakaoLogout = () => {};

const kakaopayPurchase = () => {
  window.location.href = `http://${url}/kakao/pay`;
};

/*
 * Userpage
 */
const addReview = (pId, star, content) => {
  return axios.post(`http://${url}/product/addReview`, {
    headers,
    product_id: pId,
    star,
    content,
  });
};

export default {
  addCustomer,
  getCustomer,
  getTourPreview,
  getTicketPreview,
  getCityPreview,
  getKakaoLogin,
  getKakaoLogout,
  getCityDetailPreview,
  kakaopayPurchase,
  addReview,
  selectProduct,
};
