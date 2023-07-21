export const setBalance = (obj) => {
  console.log(obj);
  return {
    type: "SET_BALANCE",
    payload: obj,
  };
};
