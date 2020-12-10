import {combineReducers} from "redux";
import {ADD_MOVIE, MovieActionTypes, SEARCH_TITLES, UPDATE_MOVIES} from '../types/movies';
import _ from 'lodash';
import { Movie } from "../types/movies";

type byIdState = {
    [key: number]: Movie
}

type allIdsState = Array<Movie>;

const byId = (state: byIdState = {}, action: MovieActionTypes) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_MOVIES:
            return action.payload;
        default:
            return state;
    }
};

const allIds = (state: allIdsState = [], action: MovieActionTypes) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state, action.payload.id];
        case UPDATE_MOVIES:
            return action.payload.map(movie => movie.id);
        default:
            return state;
    }
};

const searchTerm = (state = "", action: MovieActionTypes) => {
    switch (action.type){
        case SEARCH_TITLES:
            return action.payload
        default:
            return state;
    }
}


export default combineReducers({
    byId,
    allIds,
    searchTerm,
})
