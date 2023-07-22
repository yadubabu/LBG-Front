import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Percent = () => {
  const percent = useSelector((state) => state);
  console.log(percent.percent);

  return <div>Percent</div>;
};

export default Percent;
