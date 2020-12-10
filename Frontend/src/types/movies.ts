export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const SEARCH_TITLES = 'SEARCH_TITLES';

export type Movie = {
    id: number,
    title: string,
    genre: string,
    year: number,
    length: number,
    description: string,
    image: string,
}

export type MoviePage = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Movie[],
}

type FetchMovieAction = {
    type: typeof ADD_MOVIE,
    payload: Movie
}

type UpdateMoviesAction = {
    type: typeof UPDATE_MOVIES,
    payload: Array<Movie>
}

type SearchTitlesAction = {
    type: typeof SEARCH_TITLES;
    payload: Record<Movie['id'], Movie['title']>
}

export type MovieActionTypes = FetchMovieAction | SearchTitlesAction | UpdateMoviesAction;
