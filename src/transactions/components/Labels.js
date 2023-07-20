import React, { useEffect } from "react";
import "./label.css";
// import { getObjects } from "../../redux/actions/objActions";
import { useSelector, useDispatch } from "react-redux";

export default function Labels() {
  const dispatch = useDispatch();
  const object = useSelector((state) => state.objects);
  console.log(object.objects);
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
  const tot = useSelector((state) => state.totBalance.totBalance);

  if (!data) return <></>;
  return (
    <div className="label gap-2">
      <div
        className="bar"
        style={{ background: data.color ?? "#f9c74f" }}
      ></div>
      <h6 className="text">{data.type}</h6>
      <h5 className="font-bold">{}%</h5>
      <div></div>
    </div>
  );
};
