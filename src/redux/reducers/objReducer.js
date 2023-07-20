const initialValue = {
  totalAmount: 10000,
  percent: 100,
  objects: [
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      percent: 0,
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      percent: 0,
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      percent: 0,
    },
  ],
};
export const objReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ALL_TYPES":
      return state;

    default:
      return state;
  }
};

export const savingsReducer = (
  state = initialValue.totalAmount,
  { type, payload }
) => {
  console.log(type);
  switch (type) {
    case "SAVINGS":
      return (payload * 100) / state;
    case "EXPENSE":
      return (payload * 100) / state;
    case "INVESTMENT":
      return (payload * 100) / state;
    default:
      return state;
  }
};
// export const totalBal = (
//   state = initialValue.totalAmount,
//   { type, payload }
// ) => {
//   return state;
// };
