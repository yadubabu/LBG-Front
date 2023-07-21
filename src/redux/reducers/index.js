import { combineReducers } from "redux";
import { objReducer } from "./objReducer";
import balanceReducer from "./balanceReducer";
import percentReducer from "./percentReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  objects: objReducer,
  balance: balanceReducer,
  percent: percentReducer,
  auth: authReducer,
});

export default reducers;
