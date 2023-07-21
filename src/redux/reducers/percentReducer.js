const initialValue = {};

const percentReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  if (type === "SET_PERCENT") {
    return {
      percent: {
        savings:
          ((payload.totSavings - payload.totAmount) * 100) / payload.totAmount,
        expense: (payload.totExpense * 100) / payload.totAmount,
        investment: (payload.totInvestment * 100) / payload.totAmount,
      },
    };
  } else {
    return state;
  }
};
export default percentReducer;
