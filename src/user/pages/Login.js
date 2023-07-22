import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";
import Navbar from "../../components/Navbar";

const Login = ({ login, val }) => {
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
      {msg === "Login"
        ? setTimeout(() => {
            window.location.href = `/dashboard/${user}`;
          }, 2000)
        : ""}
      {msg ? (
        <h6 style={{ color: "green", textAlign: "center" }}>{msg}</h6>
      ) : (
        ""
      )}
      <h1 style={{ textAlign: "center" }}>Login</h1>

      <form className="loginCard" onSubmit={handleSubmit(submitHandler)}>
        <label className="lab">Email</label>
        <input className="in" type="email" {...register("email")} />
        <br />
        <label className="lab">Password</label>
        <input className="in" type="password" {...register("password")} />
        <br />

        <input className="btn" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
