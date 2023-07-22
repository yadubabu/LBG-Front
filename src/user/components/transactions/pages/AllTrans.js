import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
const AllTrans = () => {
  const [trans, setTrans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/gettrans")
      .then((res) => setTrans(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(trans);
  return (
    <div>
      <h3 className="trans">Transaction-Statement</h3>
      <table>
        <thead>
          <tr className="row-head">
            <td className="rows">Date</td>
            <td className="rows">Name</td>
            <td className="rowsT" style={{ textAlign: "center" }}>
              Type
              <td className="rowsType">
                <li>Savings/</li>
                <li>Expense/</li>
                <li>Investment</li>
              </td>
            </td>
            <td className="rows">Amount</td>
          </tr>
        </thead>
        <tbody>
          {trans.map((tran) => {
            return (
              <div>
                <tr>
                  <td className="rows">{tran.date.slice(0, 10)}</td>
                  <td className="rows" style={{ textAlign: "center" }}>
                    {tran.name}
                  </td>
                  <td className="rows" style={{ textAlign: "center" }}>
                    {tran.type}
                  </td>
                  <td
                    className="rows"
                    style={{ paddingLeft: "100px", textAlign: "center" }}
                  >
                    {tran.amount}
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrans;
