import { combineReducers } from "redux";
import totalReducer from "./totalReducer";
import setObjReducer from "./setObjReducer";

const reducers = combineReducers({
  totals: totalReducer,
  objects: setObjReducer,
});

export default reducers;
