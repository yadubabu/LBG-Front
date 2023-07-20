import { actionTypes } from "../actionTypes";

export const getObjects = () => {
  return {
    type: "ALL_TYPES",
  };
};
export const getPercent = (obj) => {
  let val = obj.type.toUpperCase();
  return {
    type: `${val}`,
    payload: obj.amount,
  };
};
// export const getSavings = (objType) => {
//   console.log(objType);
//   return {
//     type: "GET_SAVINGS",
//     payload: objType,
//   };
// };
// export const getExpense = (objType) => {
//   return {
//     type: "GET_EXPENSE",
//     payload: objType,
//   };
// };
// export const getInvestment = (objType) => {
//   return {
//     type: "GET_INVESTMENTS",
//     payload: objType,
//   };
// };
