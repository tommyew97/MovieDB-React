import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Reducers";
import OrderingDropDown from "../Components/OrderingDropDown";
import FilterForm from "../Components/FilterForm";
import '../Style/BrowsePage.css';
import MoviePoster from "../Components/MoviePoster";
import Header from "../Components/Header";
import PageBar from "../Components/PageBar";
import {searchMovies} from "../Actions";
import Button from "react-bootstrap/Button";
import {Animated} from "react-animated-css";

export default function BrowsePage() {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies.byId);
    const movieElements = Object.values(movies).map((movie) => <MoviePoster
                                                                    movieId={movie.id}
                                                                    image={movie.image}
                                                                    title={movie.title}/>)
    const determineRender = () => {
        return movieElements.length === 0 ? <div>No movies could be found for those criteria</div>
                                          : movieElements;
    };

    useEffect(() => {
        dispatch(searchMovies(true));
    }, []);

    return (
        <div className="BrowseMovies">
            <header className="header browse-bar">
                <Header searchbar={true}/>
            </header>
            <div className="d-flex filter-options filter-button">
                <div>
                    <input type="submit" className="btn btn-secondary" value={ showResults ? "Hide filter" : "Show filter" } onClick={onClick} />
                </div>
            </div>
            { showResults ?
                <div className="d-flex filter-options">
                <FilterForm />
            </div>: null }
            <div className="d-flex flex-wrap">
                {determineRender()}
            </div>
            <div className="d-flex flex-wrap">
            <PageBar/>
            </div>
        </div>
    );
}
