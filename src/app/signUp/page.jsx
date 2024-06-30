"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Container from "@/components/shared/Container";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    // console.log(values);
  };

  return (
    <>
      <Container>
        <div className="md:w-5/12 mx-auto bg-white rounded ">
          <h3 className="text-center font-semibold text-[24px] my-2">
            Register
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 px-8 py-5 "
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="name"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="w-full px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="username"
                id="username"
                {...register("username", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Contact"
                id="phone"
                {...register("Phone", { required: true })}
              />
            </div>

            <div className="relative ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="w-full  px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="relative ">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="w-full  px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Confirm Password"
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
              />
            </div>
            <div className="relative ">
              <label htmlFor="confirmPassword">Refer Code</label>
              <input
                type="tel"
                className="w-full  px-3 py-1  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                placeholder="Refer Code"
                id="refer"
                {...register("refer", { required: true })}
              />
            </div>
            <p>
              <input
                type="checkbox"
                {...register("check", { required: true })}
              />
              <span className="ml-3">
                I confirm that I am 18 years old and I have read the
              </span>{" "}
              <br />
              <Link href="/" className="underline hover:text-slate-500">
                Terms and Services
              </Link>
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#ffb60cc0] to-[#ffb80c] rounded-md text-[#fff] font-bold"
            >
              Register
            </button>
          </form>
        </div>{" "}
      </Container>
    </>
  );
};

export default RegisterPage;
