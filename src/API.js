import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

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

const kakaopayPurchase = (name, total_amount, quantity, product_id) => {
  //window.location.href = `http://${url}/kakao/pay`;
  if (total_amount > 1000000) {
    alert("100만원 초과!");
  } else {
    const send_param = {
      name,
      total_amount,
      quantity,
      product_id,
    };
    return axios
      .post(`http://${url}/kakao/pay`, send_param)
      .then((response) => {
        window.location.href = response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

/*
 * Userpage
 */
const addReview = (pId, star, content) => {
  return axios.post(`http://${url}/product/createReview`, {
    product_id: pId,
    star,
    content,
  });
};

// 찜 목록에 추가
const addLikes = (pId) => {
  alert("liked 목록에 추가!");
  // return axios.post(`http://${url}/likes/createLikes`, {
  //   product_id: pId
  // });
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
  addLikes,
};
