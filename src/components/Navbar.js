import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <a className="nav-item" href="/login">
          Login
        </a>
        <a className="nav-item" href="/register">
          Register
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
