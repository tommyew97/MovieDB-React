import {ADD_REVIEW, ADD_REVIEWS, Review, ReviewActionTypes, UPDATE_REVIEWS} from "../types/reviews";
import _ from "lodash";
import {combineReducers} from "redux";

type byIdState = {
    [key: number]: Array<Review>
};
type allIdsState = Array<number>;

const byId = (state: byIdState = {}, action: ReviewActionTypes) => {
    switch (action.type) {
        case ADD_REVIEW:
            return {...state, [action.payload.id]: action.payload};
        case ADD_REVIEWS:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case UPDATE_REVIEWS:
            return _.mapKeys(action.payload, "id");
        default:
            return state;
    }
};

const allIds = (state: allIdsState = [], action: ReviewActionTypes) => {
    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.payload.id];
        case ADD_REVIEWS:
            const Ids = action.payload.map(review => review.id);
            return [...state, ...Ids];
        case UPDATE_REVIEWS:
            return action.payload.map(review => review.id);
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allIds
})

