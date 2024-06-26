"use client";

import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import Container from "@/components/shared/Container";

const Login = ({ isLoginShow, handleLoginToggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div
        className={`w-full  h-screen bg-[#000000a3]  fixed  ${
          isLoginShow
            ? "opacity-100 z-10 duration-500"
            : "opacity-0 -z-10 duration-500"
        }`}
        onClick={handleLoginToggle}
      ></div>

      <div
        className={`md:w-[500px] w-full h-[300px]  mx-auto right-0 left-0 top-0 bottom-0 my-auto bg-green-500 fixed rounded ${
          isLoginShow
            ? "opacity-100 z-10 duration-500"
            : "opacity-0 -z-10  duration-500"
        }`}
      >
        <div className=" p-5 w-full h-full mx-auto bg-secondary rounded ">
          <div className="flex justify-center items-center ">
            <h3 className="font-semibold text-2xl text-white">Login</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-3 ">
            <input
              type="text"
              className="w-full  px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              placeholder="username"
              id="username"
              {...register("username", { required: true })}
            />

            <div className="relative z-10">
              <input
                type="password"
                className="w-full  px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 rounded-md text-[#fff] font-bold"
            >
              Login
            </button>
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
