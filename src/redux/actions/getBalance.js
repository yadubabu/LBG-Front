export const getBalance = (obj) => {
  console.log(obj);
  return {
    type: "GET_BAL",
    payload: obj,
  };
};
