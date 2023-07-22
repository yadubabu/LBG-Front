import axios from "axios";

export const totalActions = (obj) => {
  //   console.log(obj[0]);
  return {
    type: "SET_TOTAL",
    payload: obj,
  };
};
