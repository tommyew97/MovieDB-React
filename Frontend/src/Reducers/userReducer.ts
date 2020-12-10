import {combineReducers} from "redux";
import {LOG_IN, LOG_OUT} from "../types/movies";
import {UPDATE_FORM, UserAction, UserFormPayload, UserState} from "../types/user";

const user = (state: UserState = {userId: -1, username: ""},
              action: UserAction):
    UserState => {
    switch (action.type) {
        case LOG_IN:
            return {
                username: action.payload.username,
                userId: action.payload.userId,
            };
        case LOG_OUT:
            return {username: "", userId: -1};
        default:
            return state;
    }
};

const userForm = (state: string = "", action: { type: string, payload: UserFormPayload}): string => {
    if (action.type === UPDATE_FORM)
        return action.payload.text;
    return state;
};

export default combineReducers({
    details: user,
    form: userForm,
});