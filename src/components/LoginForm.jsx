import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const { logIn } = useUserContext();
  const onSubmit = (data) => {
    setUserInfo(data);
    logIn(data.username);

    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ui form w-50 position">
          <div className="field">
            <label htmlFor="username" className="white">
              UserName
            </label>
            <input
              type="text"
              name="username"
              className="white"
              placeholder="User Name"
              {...register("username", { required: true })}
            />
          </div>
          <p>{errors.username && <span>User Name is required</span>}</p>

          <div className="field">
            <label htmlFor="password" className="white">
              Password
            </label>
            <input
              className="white"
              type="password"
              name="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password field is required",
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button type="submit" className="fluid ui button blue">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
