import React from "react";
import "./style.css";

const SideBar = ({ name }) => {
  return (
    <div class="side">
      Hello!
      <h6>
        <span style={{ color: "darkred" }}>{name}</span>
      </h6>
    </div>
  );
};

export default SideBar;
