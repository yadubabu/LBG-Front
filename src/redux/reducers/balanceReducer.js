const initialValue = {
  totBalance: {
    totAmount: "",
    totSavings: "",
    totExpence: "",
    totInvestment: "",
  },
};

const balanceReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "GET_BAL":
      return { ...state, totBalance: payload };
    default:
      return state;
  }
};
export default balanceReducer;
