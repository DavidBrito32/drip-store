export type TUser = {
    user_email: string;
    user_name: string;
    user_password: string;
    user_level: number;
    user_id?: number;
}

export type UserStatus = {
    message: string;
    flag: boolean;
};