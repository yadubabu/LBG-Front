const initialValue = {
  auth: "",
};
const authReducer = (state = initialValue, { type, payload }) => {
  if (type === "SET_AUTH") {
    return payload;
  } else {
    return state;
  }
};
export default authReducer;
