import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "./style.css";
import Main from "../components/Main";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setBalance } from "../../redux/actions/setBalance";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const [bal, setBal] = useState();
  const name = useParams().name;
  useEffect(() => {
    if (name) {
      axios
        .get("http://localhost:5000/getbalance/balance")
        .then((res) => dispatch(setBalance(res.data)));
    }
  }, []);
  return (
    <div className="gridCon">
      <side>
        <SideBar name={name} />
      </side>
      <main>
        <Main name={name} />
      </main>
    </div>
  );
};

export default Dashboard;
