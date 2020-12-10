import React from 'react';
import SearchBar from '../Components/SearchBar'
import { Link } from 'react-router-dom';
import Login from "../Components/Login";
import ReviewForm from "../Components/ReviewForm";
import Header from "../Components/Header";
import FilterForm from "../Components/FilterForm";
import '../Style/LandingPage.css'
import Button from "react-bootstrap/Button";

export default function LandingPage() {
    return(
        <div className="LandingPage">
            <div className={"top-bar"}>
                <Header searchbar={false}/>
            </div>
        <div className={"land-page"}>
            <div className={"d-flex flex-1"}>
                <div className={"land-search"}>
                    <SearchBar showSuggestions={true} longText={true}/>
                </div>
            </div>
            <div className={"d-flex flex-2"}>
                <div className="seeMore">
                </div>
            </div>
        </div>
        </div>
    );
}
