import {LOG_IN, LOG_OUT} from "../types/movies";
import AppThunk from "../types";
import axiosREST from "../api/axiosREST";
import {UPDATE_FORM} from "../types/user";
import history from "../history";

const userLoggedIn = (username: string, userId: number) => {
    return {
        type: LOG_IN,
        payload: {username, userId}
    }
};

export const logOut = () => ({type: LOG_OUT});

const updateForm = (statusCode: number = 0, statusText: string) => {
    return {type: UPDATE_FORM, payload: {code: statusCode, text: statusText}};
};

export const logIn = (username: string, password: string, type: "create" | "login"): AppThunk =>
    async (dispatch) => {
        try {
            const url = type === "login" ? 'users/login/' : 'users/';
            const response = await axiosREST.post(url, {username, password});
            dispatch(updateForm(200, ""));
            dispatch(userLoggedIn(username, response.data.id));
            history.go(-1);
        } catch (e) {
            console.log(e);
            dispatch(updateForm(e.response.status, e.response.statusText));
        }
    };