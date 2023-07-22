import React from "react";
import Delete from "@mui/icons-material/DeleteForever";
import "./list.css";

export default function List() {
  const objects = [
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      perrcent: 45,
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      perrcent: 35,
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      perrcent: 20,
    },
  ];
  return (
    <div>
      <h5 style={{ marginTop: "35px" }}>Transaction History</h5>
      {objects.map((val, i) => {
        return (
          <>
            <Transactions key={i} data={val} />
          </>
        );
      })}
    </div>
  );
}
function Transactions({ data }) {
  if (!data) return null;
  return (
    <div className="list">
      <div
        className="box"
        style={{ borderRight: `8px solid ${data.color}`, width: "210px" }}
      >
        <Delete className="del" style={{ color: `${data.color}` }} />

        <span>{data.type}</span>
      </div>
    </div>
  );
}
