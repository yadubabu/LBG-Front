import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./user/pages/Login";
import Register from "./user/pages/Register";
import Home from "./components/Home";
import Dashboard from "./user/pages/Dashboard";
import Transactions from "./transactions/pages/Transactions";
import ExpenseTracker from "./transactions/pages/ExpenseTracker";
import AllTrans from "./transactions/pages/AllTrans";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard/:name" exact element={<Dashboard />} />
          <Route path="/trans" exact element={<Transactions />} />
          <Route path="/allTrans" exact element={<AllTrans />} />
          <Route path="/expTrack" exact element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
