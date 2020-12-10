import {OrderingState} from "./ordering";
import {Genres} from "../Components/FilterForm";

export const CHANGE_FILTER = "CHANGE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export type FilterKeys = "" | "length" | "genre" | "year";
export type FilterState = {
    genres: {[key in Genres]: boolean}
    year: { to: string, from: string, },
}
export type FilteringState = {
    filter: FilterState,
    ordering: OrderingState,
}
export type FilterAction = { type: string, payload: FilterState };