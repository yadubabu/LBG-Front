import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Transactions from "../../transactions/pages/Transactions";

const Main = () => {
  // const tot = useSelector((state) => state.totBalance.totBalance);
  const openTrans = () => {
    window.location.href = "/trans";
  };
  return (
    <div className="gridCards">
      <div className="card">
        <span>
          {/* Account Balance-{tot[0].totAmount} */}
          <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
          {/* {tot} */}
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
