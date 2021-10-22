/* eslint-disable */
import client from "../lib/client";
import { User, UserResponse, LoggedInUser, LogoutResponse } from "../models/user";

export async function signup(payload: User): Promise<UserResponse> {
    try {
        const content = await client.post<UserResponse>("signup", {
            username: payload.username,
            password: payload.password,
        });

        return content.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function login(payload: User): Promise<LoggedInUser> {
    try {
        const content = await client.post<LoggedInUser>("login", {
            username: payload.username,
            password: payload.password,
        });

        return content.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function logout(): Promise<LogoutResponse> {
    try {
        const content = await client.post<LogoutResponse>("logout");
        return content.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function queryHome(): Promise<any> {
    try {
        const content = await client.get("home");
        return content.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
