import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { setAuth } from "../../redux/actions/setAuth";
import axios from "axios";
import { percentActions } from "../../redux/actions/percentActions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Main = ({ name }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data.percent);
  const bal = useSelector((state) => state.balance[0]);
  useEffect(() => {
    if (name) {
      if (bal) {
        dispatch(percentActions(bal[0].totAmount));
      }
    }
  }, [bal]);
  const openTrans = () => {
    window.location.href = "/trans";
  };

  return (
    <div className="gridCards">
      <div className="card">
        <span>
          Total Balance:
          <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
          {bal.totAmount}
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
