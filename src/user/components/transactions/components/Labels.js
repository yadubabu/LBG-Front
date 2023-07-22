import React, { useEffect } from "react";
import { percentActions } from "../../redux/actions/percentActions";
import "./label.css";
import { useSelector, useDispatch } from "react-redux";

export default function Labels() {
  const object = useSelector((state) => state.objects);
  const dispatch = useDispatch();
  const bal = useSelector((state) => state.balance[0]);
  const percent = useSelector((state) => state.percent);
  console.log(percent);
  useEffect(() => {
    dispatch(percentActions(bal));
  }, []);
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
  const metaData = useSelector((state) => state);
  console.log(metaData);
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
