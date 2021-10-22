export type User = {
    username: string;
    password: string;
};

export type UserResponse = {
    username: string;
    password: string;
};

export type LoggedInUser = {
    message: string;
    jwt: string;
}

export type LogoutResponse = {
    message: string;
}

