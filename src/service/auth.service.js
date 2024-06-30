"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const SetAccessToken = (values) => {
    const { username, password } = values;
    cookies().set("username", username);
    cookies().set("password", password);
};

export const getAccessToken = () => {
    const username = cookies().get('username')?.value;
    const password = cookies().get('password')?.value;
    return { username, password }
}
