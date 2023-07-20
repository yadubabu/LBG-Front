import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { useSelector } from "react-redux";
import "./graph.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [360, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 10,
        spacing: 5,
      },
    ],
  },
  options: {
    cutouts: 115,
  },
};
const Graph = () => {
  const tot = useSelector((state) => state.totBalance.totBalance);
  console.log(tot);
  return (
    <div className="flex justify-content max-w-xs-mx-auto">
      <span>
        Account Balance-{tot[0].totAmount}
        <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
      </span>
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <h3 className="mb-4 font-bold title">
            Total
            <span className="val">${0}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
