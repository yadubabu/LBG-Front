import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "./style.css";
import Main from "../components/Main";
import { useParams } from "react-router-dom";
import axios from "axios";
import { totalActions } from "../../redux/actions/totalAction";
import { useDispatch, useSelector } from "react-redux";

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
