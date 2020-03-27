/*
 * APP이 더 복잡한 STATE를 가지게 되면 ROOT REDUCER를 만들어서 용도별로 STATE 데이터 관리
 */

import { combineReducers } from "redux";
import customerReducer from "./customer/customer.reducer";

const rootReducer = combineReducers({ customer: customerReducer });

export default rootReducer;
