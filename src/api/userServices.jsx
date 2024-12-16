import { toast } from "react-toastify";
import axios from "./axiosConfig";

// current user service
export const currentUserService = async () => {
    try {
        const { data } = await axios.get("/users/current-user");
        return data.user;
    } catch (error) {
        console.log(error.response.data.message);
        // toast.error(error.response.data.message);
    }
};

// login service
export const loginService = async (user) => {
    try {
        const { data } = await axios.post("/users/login", user);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// signup service
export const signupService = async (user) => {
    try {
        const { data } = await axios.post("/users/signup", user);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// logout service
export const logoutService = async () => {
    try {
        const { data } = await axios.get("/users/logout");
        console.log(data);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// put profile service
export const putProfileService = async (user) => {
    try {
        const { data } = await axios.put("/users/profile", user);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// reset password service
export const resetPasswordService = async (email) => {
    try {
        const { data } = await axios.post("/users/reset-password", email);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
