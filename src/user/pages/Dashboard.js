import React from "react";
import SideBar from "../components/SideBar";
import "./style.css";
import Main from "../components/Main";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const name = useParams().name;
  return (
    <div className="gridCon">
      <side>
        <SideBar name={name} />
      </side>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default Dashboard;
