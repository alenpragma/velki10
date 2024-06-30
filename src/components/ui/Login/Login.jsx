"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { SetAccessToken } from "@/service/auth.service";
import { RxCross1 } from "react-icons/rx";

const Login = ({ isLoginShow, handleLoginToggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const name = "remon";
  const word = "2345";

  const onSubmit = async (values) => {
    const { username, password } = values;
    if (name === username || word === password) {
      SetAccessToken(values);
      reset();
      handleLoginToggle();
    } else alert("doesnot match");
  };

  return (
    <>
      <div
        className={`w-full h-[100%] bg-[#00000053]  fixed top-0  ${
          isLoginShow
            ? "opacity-100 z-10 duration-500"
            : "opacity-0 -z-10 duration-500"
        }`}
        onClick={handleLoginToggle}
      ></div>

      <div
        className={`md:w-[500px] w-full h-[400px]  mx-auto right-0 left-0 top-0 bottom-0 my-auto fixed rounded ${
          isLoginShow
            ? "opacity-100 z-10 duration-500"
            : "opacity-0 -z-10  duration-500"
        }`}
      >
        <div className="w-full h-full mx-auto bg-white rounded ">
          <div></div>
          <div className="p-3 bg-primary text-white font-semibold text-[20px] rounded flex justify-between items-center">
            <h3>Wellcome to Velki10</h3>
            <RxCross1
              onClick={handleLoginToggle}
              className="cursor-pointer hover:text-slate-700 duration-300"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 px-8 py-5 "
          >
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="w-full px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="username"
                id="username"
                {...register("username", { required: "This is required." })}
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="w-full  px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Password"
                id="password"
                {...register("password", { required: true })}
              />
              <div className="text-end mt-1">
                <Link
                  href="/"
                  className="border-b underline hover:text-slate-500"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#ffb60cc0] to-[#ffb80c] rounded-md text-[#fff] font-bold"
            >
              Login Now
            </button>
            <p>
              Do not have an Account?{" "}
              <Link href="/" className="underline hover:text-slate-500">
                Sign Up Now
              </Link>
            </p>
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
