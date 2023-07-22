import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Configs = () => {
  const objects = useSelector((state) => state.objects);
  const [data, setData] = useState([]);
  console.log(objects);
  const getObjects = () => {
    objects.map((object) => {
      return (object.percent * 100) / 360;
    });
  };
  // useEffect(() => {
  //   getObjects();
  // }, []);
  const config = {
    data: {
      datasets: [
        {
          data: getObjects(),
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
  return <div>config</div>;
};

export default Configs;
