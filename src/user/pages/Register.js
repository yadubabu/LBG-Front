import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

const Register = () => {
  const [msg, setMsg] = useState();

  const { register, handleSubmit, resetField } = useForm();
  const submitHandler = async (data) => {
    await axios
      .post("http://localhost:5000/adduser", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword,
        pancard: data.pancard,
        phone: data.phone,
      })
      .then((res) => setMsg(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Register</h1>
      {msg ? (
        <h6 style={{ color: "green", textAlign: "center" }}>{msg}</h6>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <br />
        <label>Email</label>
        <input type="email" {...register("email")} />
        <br />
        <label>Password</label>
        <input type="password" {...register("password")} />
        <br />
        <label>ConfirmPassword</label>
        <input type="password" {...register("confirmpassword")} />
        <br />
        <label>Pancard</label>
        <input type="text" {...register("pancard")} />
        <br />
        <label>Phone</label>
        <input type="number" {...register("phone")} />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
