import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { useSelector, useDispatch } from "react-redux";
import "./graph.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

Chart.register(ArcElement);

const Graph = () => {
  const [newData, setNewData] = useState();
  const total = useSelector((state) => state.totals.total.totAmount);
  const objects = useSelector((state) => state.objects);
  console.log(objects);
  console.log(total);
  const getObjects = () => {
    const data = objects.map((obj) => {
      return (obj.percent * 100) / 360;
    });
    setNewData(data);
  };
  useEffect(() => {
    getObjects();
  }, [objects]);
  const config = {
    data: {
      datasets: [
        {
          data: newData,
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

  return (
    <div className="flex justify-content max-w-xs-mx-auto">
      <span>
        Total Balance:
        <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
        {total}
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
