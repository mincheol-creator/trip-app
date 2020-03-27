import CustomerActionTypes from "./customer.types";

/*
 * ACTION CREATOR (ACTION Object를 리턴함)
 */
const addCustomer = item => ({
  type: CustomerActionTypes.ADD_CUSTOMER,
  payload: item
});

export default addCustomer;
