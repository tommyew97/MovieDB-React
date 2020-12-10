import AppThunk from '../types';
import {ADD_MOVIE, SEARCH_TITLES, Movie, MovieActionTypes, UPDATE_MOVIES, MoviePage} from "../types/movies";
import axiosREST from "../api/axiosREST";
import {updatePages} from "./pageActions";
import {decideFilters} from "./utility/decideFilters";


export const addMovie = (movie: Movie): MovieActionTypes => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
};

export const updateMovies = (movies: Array<Movie>): MovieActionTypes => {
    return {
        type: UPDATE_MOVIES,
        payload: movies,
    }
}

export const searchMovieTitles = (searchTerm: string): MovieActionTypes => {
    return {
        type: SEARCH_TITLES,
        payload: searchTerm
    }
};

export const fetchMovie = (id: number): AppThunk => {
    return async (dispatch) => {
        const response = await axiosREST.get<Movie>(`/movies/${id}`);
        dispatch(addMovie(response.data));
    };
};

export const  searchMovies = (resetPages = false): AppThunk => {
    return async (dispatch, getState) => {
        const filtering = getState().filtering;
        const searchTerm = getState().movies.searchTerm;
        const currentPage = resetPages ? 1 : getState().page.current;
        const filters = decideFilters(filtering);
        const query = `/movies?search=${searchTerm}${filters}&page=${currentPage}`
        const response = await axiosREST.get<MoviePage>(query);
        dispatch(updateMovies(response.data.results));
        dispatch(updatePages(response.data.count, currentPage));
    }
};