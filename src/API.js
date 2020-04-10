import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

// const url = process.env.REACT_APP_SERVER_URL;
// const url = "70.12.226.41:8181";
const url = "70.12.227.32:8181"; // 멀캠 지환
// const url = "172.30.1.9:8181"; // 시우형네

/*
 * USER
 */

const addCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signup`, {
    headers,
    email,
    password
  });
};

const getCustomer = (email, password) => {
  return axios.post(`http://${url}/customer/signin`, {
    headers,
    email,
    password
  });
};

const logout = () => {
  return axios.post(`http://${url}/customer/logout`, {});
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

const getCityDetailPreview = sendCityName => {
  return axios.post(`http://${url}/product/getCityDetailPreview`, {
    headers,
    sendCityName
  });
};

const selectProduct = sendProductID => {
  return axios.post(`http://${url}/product/selectProduct`, {
    headers,
    sendProductID
  });
};

const getKakaoLogin = () => {
  window.location.href = `http://${url}/kakao`;
};

const getKakaoLogout = () => {};

const kakaopayPurchase = (name, total_amount, quantity, product_id) => {
  if (total_amount > 1000000) {
    alert("100만원 초과!");
  } else {
    const send_param = {
      name,
      total_amount,
      quantity,
      product_id
    };
    return axios
      .post(`http://${url}/kakao/pay`, send_param)
      .then(response => {
        window.location.href = response.data.message;
      })
      .catch(err => {});
  }
};

/*
 * Userpage
 */
const addReview = (pId, star, content, order_number) => {
  return axios.post(`http://${url}/review/createReview`, {
    product_id: pId,
    star,
    content,
    order_number
  });
};

// 구매내역에서 리뷰 안써진거 불러오기
// const getUnwrittenReviewList = () => {
//   return axios.post(`http://${url}/review/getUnwrittenReviews`, {});
// };

// 구매내역 불러오기
const getOrderList = () => {
  return axios.post(`http://${url}/order/getOrderList`, {});
};

// 찜 목록에 추가
const addLikes = pId => {
  return axios.post(`http://${url}/likes/createLikes`, {
    product_id: pId
  });
};
const getLikes = pId => {
  return axios.post(`http://${url}/likes/getLikes`, {});
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
  getOrderList,
  logout,
  getLikes
};
