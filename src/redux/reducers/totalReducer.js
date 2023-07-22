const initialValue = {
  total: {},
};

const totalReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  if (type === "SET_TOTAL") {
    return { total: payload[0] };
  } else {
    return state;
  }
};
export default totalReducer;
