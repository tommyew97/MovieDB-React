export const UPDATE_FORM = "UPDATE_FORM";
export type UserFormPayload = {text: string, code: number}
export type UserAction = {
    type: string,
    payload: {
        username: string,
        userId: number
    },
}

export type UserState = {
    username: string,
    userId: number,
}
