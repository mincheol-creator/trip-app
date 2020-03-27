import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";

/*
 * Reduxer Logger Middleware
 */
import { createLogger } from "redux-logger";
const logger = createLogger();

const store = createStore(rootReducer, undefined, applyMiddleware(logger)); // (reducer, initial state, enhancer)

export default store;
