import {CHANGE_PAGE, PAGE_SIZE, PageActions, UPDATE_TOTAL_PAGES} from "../types/page";
import AppThunk from "../types";
import {searchMovies} from "./movieActions";


export const changePage = (newCurrent: number, next: number | null, prev: number | null): PageActions => {
    return {
        type: CHANGE_PAGE,
        payload: {current: newCurrent, next, prev}
    }
};

export const updatePages = (count: number, current: number): PageActions => {
    const total = Math.ceil(count / PAGE_SIZE);
    return {
        type: UPDATE_TOTAL_PAGES,
        payload: {total, current},
    }
};

export const newPage = (newCurrent: number, total: number): AppThunk => (dispatch, getState) => {
    const next = newCurrent < total ? newCurrent + 1 : null;
    const prev = newCurrent > 1 ? newCurrent - 1 : null;
    dispatch(changePage(newCurrent, next, prev));
    return new Promise((resolve) => {
        dispatch(searchMovies());
        resolve();
    })
};