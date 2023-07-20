import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="head">
      <h3>
        <span className="logo">LBG</span>Budget
      </h3>
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
