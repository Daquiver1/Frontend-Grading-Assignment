import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="l-container">
      <div className="login-form">
        <h1 className="login-text">L o g i n</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-text"
            type="text"
            placeholder="ID"
            {...register("ID", { required: true })}
          />
          <error style={{ color: "red" }}>
            {errors.ID?.type === "required" && "ID is required"}
          </error>
          <br />
          <input
            className="input-text"
            type="text"
            placeholder="PIN"
            {...register("PIN", { required: true })}
          />
          <error style={{ color: "red" }}>
            {errors.PIN?.type === "required" && "PIN is required"}
          </error>
          <button className="login-button">Login</button>
        </form>
        <p className="forgot">
          Forgot your PIN? <Link className="click-here">Click here</Link>
        </p>
      </div>
    </div>
  );
};
