import {combineReducers} from "redux";
import {CHANGE_FILTER, CLEAR_FILTER, FilterAction, FilterState} from "../types/filter";
import {CHANGE_ORDERING, CLEAR_ORDERING, OrderingAction, OrderingState} from "../types/ordering";

const initialFilterState = {
    genres: {
        Action: false,
        Romance: false,
        Horror: false,
        Comedy: false,
        Musical: false,
        Drama: false,
    },
    year: {to: "", from: ""}
}


const filter = (state: FilterState = initialFilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {...action.payload}
        case CLEAR_FILTER:
            return {...initialFilterState};
        default:
            return state;
    }
};

const ordering = (state: OrderingState = {key: "title", order: "asc"},
                  action: OrderingAction): OrderingState => {
    switch (action.type) {
        case CHANGE_ORDERING:
            return {...state, ...action.payload};
        case CLEAR_ORDERING:
            return {key: "", order: "asc"};
        default:
            return state;
    }
};

export default combineReducers({
    filter,
    ordering,
});