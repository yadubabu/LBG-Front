export const setAuth = (name) => {
  console.log(name);
  return {
    type: "SET_AUTH",
    payload: name,
  };
};
