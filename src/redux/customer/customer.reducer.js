import CustomerActionTypes from "./customer.types";

/*
 * 초기 STATE 값
 */
const INITIAL_STATE = { isLoggedIn: false };

/*
 * REDUCER에서 특정 ACTION TYPE일 때 실행할 함수 (새 State를 return 함)
 */

// const addCustomer = (prevState, newState) => {
//   return newState;
// };

/*
 * REDUCER (switch로 ACTION TYPE별로 새로운 STATE를 리턴할 함수 분리)
 */
const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerActionTypes.ADD_CUSTOMER:
      return { isLoggedIn: action.payload };

    default:
      return state;
  }
};

export default customerReducer;

// 미친 ㅠㅠㅠㅠㅠ push 쓰면 안되는거였다!!!!!
// 리덕스는 절대로!!! 절대로!!! prevState를 직접 바꾸면 안됨!!! 안된다고!!!!!
// ...로 새 어레이를 만들던가 했어야했음. 왜 로거에 prev랑 next랑 같은 값이었는지 알겠네
