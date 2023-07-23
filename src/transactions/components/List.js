import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Delete from "@mui/icons-material/DeleteForever";
import "./list.css";

export default function List() {
  const objects = useSelector((state) => state.objects);
  const [trans, setTrans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/gettrans")
      .then((res) => setTrans(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(trans);
  const setTransactions = (data) => {
    setTrans(data);
  };
  // const objects = [
  //   {
  //     type: "Savings",
  //     color: "rgb(255, 99, 132)",
  //     perrcent: 45,
  //   },
  //   {
  //     type: "Investment",
  //     color: "rgb(54, 162, 235)",
  //     perrcent: 35,
  //   },
  //   {
  //     type: "Expenses",
  //     color: "rgb(255, 205, 86)",
  //     perrcent: 20,
  //   },
  // ];
  return (
    <div>
      <h5 style={{ marginTop: "35px" }}>Transaction History</h5>
      {trans.slice(trans.length - 3, trans.length).map((val, i) => {
        return (
          <>
            <Transactions
              setTransactions={setTransactions}
              key={i}
              data={val}
            />
          </>
        );
      })}
    </div>
  );
}
function Transactions({ data, setTransactions }) {
  if (!data) return null;

  const style = () => {
    if (data.type === "savings") {
      return "rgb(255, 99, 132)";
    } else if (data.type === "expense") {
      return "rgb(255, 205, 86)";
    } else if (data.type === "investment") {
      return "rgb(54, 162, 235)";
    }
  };
  const deleteTrans = async (id) => {
    await axios
      .delete(`http://localhost:5000/delete/deletetrans/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="list">
      <div
        className="box"
        style={{ borderRight: `8px solid ${style()}`, width: "210px" }}
      >
        <Delete
          className="del"
          id={data._id}
          onClick={(e) => deleteTrans(e.target.id)}
          style={{ color: style() }}
        />

        <span>{data.name}</span>
      </div>
    </div>
  );
}
