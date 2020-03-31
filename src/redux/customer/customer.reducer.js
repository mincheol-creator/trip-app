import CustomerActionTypes from "./customer.types";

/*
 * 초기 STATE 값
 */
const INITIAL_STATE = { isLoggedIn: false };

/*
 * REDUCER에서 특정 ACTION TYPE일 때 실행할 함수 (새 State를 return 함)
 */

const addCustomer = (prevState, newState) => {
  return newState;
};

/*
 * REDUCER (switch로 ACTION TYPE별로 새로운 STATE를 리턴할 함수 분리)
 */
const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerActionTypes.ADD_CUSTOMER:
      return addCustomer(state, action.payload);

    default:
      return state;
  }
};

export default customerReducer;
