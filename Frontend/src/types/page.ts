export const PAGE_SIZE = 12;
export const CHANGE_PAGE = "CHANGE_PAGE";
export const UPDATE_TOTAL_PAGES = "UPDATE_TOTAL_PAGES";

export type PageState = {
    total: number,
    current: number,
    next: number | null,
    prev: number | null
}
export type ChangePageAction = {
    type: string,
    payload: {
        current: number,
        next: number | null,
        prev: number | null,
    }
}
export type UpdatePageAction = {
    type: string,
    payload: { total: number, current: number },
}

export type PageActions = UpdatePageAction | ChangePageAction;
