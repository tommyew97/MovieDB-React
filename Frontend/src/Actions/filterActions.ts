import {CHANGE_ORDERING, OrderingAction, OrderingActionPayload} from "../types/ordering";
import AppThunk from "../types";
import {searchMovies, searchMovieTitles} from "./movieActions";
import {CHANGE_FILTER, FilterAction} from "../types/filter";
import {FilterFormData} from "../Components/FilterForm";
import _ from 'lodash';
import {changePage} from "./pageActions";

const applyFilter = (action: OrderingAction | FilterAction): AppThunk =>
    (dispatch, getState) => {
        dispatch(action);
        return new Promise((resolve) => {
            dispatch(searchMovies(true));
            resolve();
        })
    }

export const changeOrdering = (newOrder: OrderingActionPayload) =>
    applyFilter({type: CHANGE_ORDERING, payload: newOrder});

export const changeFilters = (data: FilterFormData) => {
    return applyFilter({type: CHANGE_FILTER, payload: {
            genres: {
                ..._.omit(data, ["to", "from"])  // Will return every genre and not to and from properties
            },
            year: {to: data.to, from: data.from}
        }});
}