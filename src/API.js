import axios from "axios";

axios.defaults.withCredentials = true;

// const url = process.env.REACT_APP_SERVER_URL;
// const url = "70.12.226.41:8181";
const url = "70.12.227.32:8181"; // 멀캠 지환
// const url = "172.30.1.9:8181"; // 시우형네

const API_KEY = process.env.REACT_APP_KAKAO_KEY;

/*
 * USER
 */

const addCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signup`, {
    email,
    password,
  });
};

const getCustomer = (email, password) => {
  console.log(url);
  return axios.post(`http://${url}/customer/signin`, {
    email,
    password,
  });
};

const getTourPreview = () => {
  return axios.post(`http://${url}/product/getTourPreview`, {});
};

const getTicketPreview = () => {
  return axios.post(`http://${url}/product/getTicketPreview`, {});
};

const getPreview = () => {
  return axios.post(`http://${url}/product/getProductPreview`, {});
};

const selectProduct = (id) => {
  return axios.post(`http://${url}/product/getProduct`, {
    id,
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

const kakaopayPurchase = (send_param) => {
  //window.location.href = `http://${url}/kakao/pay`;

  return axios
    .post(`http://${url}/kakao/pay`, send_param)
    .then((response) => {
      window.location.href = response.data.message;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  addCustomer,
  getCustomer,
  getTourPreview,
  getTicketPreview,
  getKakaoLogin,
  getKakaoLogout,
  kakaopayPurchase,
};
