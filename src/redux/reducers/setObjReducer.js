const initialValue = {
  objects: [],
};

const setObjReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  if (type === "SET_OBJECTS") {
    return payload;
  } else {
    return state;
  }
};
export default setObjReducer;
