import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import axios from "axios";
import Navbar from "../../components/Navbar";
import Dashboard from "./Dashboard";

const Login = () => {
  const [msg, setMsg] = useState();
  const [user, setUser] = useState();
  const { register, handleSubmit, resetField } = useForm();

  const submitHandler = async (data) => {
    if (!data) return;
    const { email, password } = data;
    await axios
      .post("http://localhost:5000/loginuser/", {
        email,
        password,
      })
      .then((res) => setUser(res.data))
      .then(() => setMsg("Login"))
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      {msg === "Login"
        ? setTimeout(() => {
            window.location.href = `/dashboard/${user.name}`;
            // <Dashboard user={user} />;
          }, 2000)
        : ""}
      {msg ? (
        <h6 style={{ color: "green", textAlign: "center" }}>{msg}</h6>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        <br />
        <label>Password</label>
        <input type="password" {...register("password")} />
        <br />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
