import {combineReducers} from "redux";
import user from './userReducer';
import movies from './movieReducer';
import reviews from './reviewReducer';
import filtering from './filterReducer';
import page from './pageReducer';

const rootReducer = combineReducers(
    {user, movies, reviews, filtering, page}
);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;