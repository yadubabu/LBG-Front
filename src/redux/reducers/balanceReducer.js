const initialValue = {
  balance: {},
};

const balanceReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  if (type === "SET_BALANCE") {
    return payload;
  } else {
    return state;
  }
};
export default balanceReducer;
