import React, { useEffect } from "react";

import "./label.css";

import { useSelector, useDispatch } from "react-redux";
import Percent from "./Percent";

export default function Labels() {
  const object = useSelector((state) => state.objects);
  return (
    <>
      {object.objects.map((val, i) => {
        return (
          <div key={i}>
            {" "}
            <LabelComponent data={val} />
          </div>
        );
      })}
    </>
  );
}

const LabelComponent = ({ data }) => {
  const percent = useSelector((state) => state);
  console.log(percent.percent);
  // const checkPercent = (data) => {
  //   if (data === "Savings") {
  //     alert("hai");
  //   }
  // };
  if (!data) return <></>;
  return (
    <div className="label gap-2">
      <div
        className="bar"
        style={{ background: data.color ?? "#f9c74f" }}
      ></div>
      <h6 className="text" id={data.type}>
        {data.type}
      </h6>
      {/* <h5 className="font-bold">{checkPercent(data.type)}</h5> */}
      <div></div>
    </div>
  );
};
