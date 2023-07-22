import React, { useEffect } from "react";
import "./label.css";
import axios from "axios";
import { totalActions } from "../../redux/actions/totalAction";
import { useSelector, useDispatch } from "react-redux";
import { setObjActions } from "../../redux/actions/setObjActions";

export default function Labels() {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.totals.total);
  console.log(total);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getbalance/balance/")
      .then((res) => dispatch(totalActions(res.data)))
      .catch((err) => console.log(err));
  }, []);
  const savingPercent = (total.totSavings * 100) / total.totAmount;
  const expensePercent = (total.totExpense * 100) / total.totAmount;
  const investmentPercent = (total.totInvestment * 100) / total.totAmount;

  const objects = [
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      percent: Math.round(savingPercent),
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      percent: Math.round(expensePercent),
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      percent: Math.round(investmentPercent),
    },
  ];

  useEffect(() => {
    // if (savingPercent && expensePercent && investmentPercent) {
    dispatch(setObjActions(objects));
    // }
  }, []);
  return (
    <>
      {objects.map((val, i) => {
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
      <h5 className="font-bold">{data.percent}%</h5>
      <div></div>
    </div>
  );
};
