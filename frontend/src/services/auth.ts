/* eslint-disable */
import client from "../lib/client";
import { User, UserResponse } from "../models/user";

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

export async function login(payload: User): Promise<any> {
    try {
        const content = await client.post("login", {
            username: payload.username,
            password: payload.password,
        });
        return content;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function logout(): Promise<any> {
    try {
        const content = await client.post("logout");
        return content;
    } catch (error) {
        console.error(error);
    }
}

export async function queryHome(): Promise<any> {
    try {
        const content = await client.get("home");
        return content;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
