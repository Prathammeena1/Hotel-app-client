export {} from "../reducers/userSlice";

import {
    currentUserService,
    loginService,
    logoutService,
    signupService,
} from "../../api/userServices";
import { login, logout } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch) => {
    const user = await currentUserService();
    dispatch(login(user));
};

export const asyncsignup = (user) => async (dispatch) => {
    await signupService(user);
    dispatch(currentUserService());
};

export const asynclogin = (user) => async (dispatch) => {
    await loginService(user);
    dispatch(asynccurrentuser());
};

export const asynclogout = () => async (dispatch) => {
    await logoutService();
    dispatch(logout());
};
