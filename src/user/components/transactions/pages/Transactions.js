import React from "react";
import "./style.css";

const Transactions = () => {
  return (
    <div>
      <ul>
        <li className="trans">
          <a href="/allTrans"> Transactions History</a>
        </li>
        <li>
          <a href="/expTrack">Expense Tracker</a>
        </li>
      </ul>
    </div>
  );
};

export default Transactions;
