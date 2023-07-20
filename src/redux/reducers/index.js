import { combineReducers } from "redux";
import { objReducer } from "./objReducer";
import balanceReducer from "./balanceReducer";

const reducers = combineReducers({
  // val: 100,
  // total: totalBal,
  // color: colorReducer,
  objects: objReducer,
  // percent: savingsReducer,
  totBalance: balanceReducer,
});

export default reducers;
