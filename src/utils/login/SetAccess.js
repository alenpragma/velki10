"use server";


import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SetAccessToken = (values) => {
    const { username, password } = values;
    cookies().set("username", username);
    cookies().set("password", password);
    redirect("/");
};

export default SetAccessToken;
