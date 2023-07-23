const initialValue = {
  objects: [],
};

const setObjReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "SET_OBJECTS":
      return payload;
    default:
      return state;
  }
};
export default setObjReducer;
