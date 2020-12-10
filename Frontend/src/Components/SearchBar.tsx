import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../Reducers';
import {searchMovies, searchMovieTitles} from '../Actions';
import { Link, useHistory } from 'react-router-dom';
import '../Style/SearchBar.css';
import {changePage, newPage} from "../Actions/pageActions";
import Button from "react-bootstrap/Button";

type Props = {
    showSuggestions: boolean,
    longText: boolean
}

export default function SearchBar(props: Props) {
    const movies = useSelector((state: RootState) => state.movies);
    const [matching, setMatching] = useState<JSX.Element[]>([]);
    const [showMatching, setShowMatching] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const matchesElem: JSX.Element[] = Object.values(movies.byId)
            .map((movie) => <Link to={`movie/${movie.id}`} key={movie.id} >{movie.title} {movie.year}<br /></Link>);
        setMatching(matchesElem)
    }, [movies])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const term = e.currentTarget.value;
        dispatch(searchMovieTitles(term));  // Update the search term
        dispatch(searchMovies(true));
        if (term.length > 2 && props.showSuggestions) {
            setShowMatching(true)
        }
        else {setShowMatching(false)}
    }

    const determineSuggestions = () => {
        return showMatching ? matching : null;
    }


    if (props.longText)
        return (
            <div>
                <div className={"SearchBar"}>
                    <input className="searchField" type={"text"} value={movies.searchTerm} onChange={(e) => handleChange(e)} placeholder={"Search for movies here..."}/>
                </div>
                <Link to={"/browse"} className="search-movie-button">
                    <Button className="button-search" variant="dark">Search!</Button>
                </Link>
                <div className={"Suggestions"}>
                    {determineSuggestions()}
                </div>

            </div>
        );
    else
        return (
            <div className={"SearchBar1"}>
                <input className="searchField" type={"text"} value={movies.searchTerm} onChange={(e) => handleChange(e)} placeholder={"Search"}/>
                <div className={"Suggestions"}>
                    {determineSuggestions()}
                </div>
            </div>
        );
}
