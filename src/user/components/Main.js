import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import axios from "axios";
import { totalActions } from "../../redux/actions/totalAction";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Main = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.totals.total.totAmount);
  console.log(total);
  const openTrans = () => {
    window.location.href = "/trans";
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/getbalance/balance/")
      .then((res) => dispatch(totalActions(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="gridCards">
      <div className="card">
        <span>
          Total Balance:
          <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
          {total}
        </span>
      </div>
      <div className="serv">
        <div className="card-grp">Budget</div>
        <div className="card-grp" onClick={openTrans}>
          Transactions
        </div>
      </div>
    </div>
  );
};

export default Main;
