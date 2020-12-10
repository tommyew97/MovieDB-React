import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {ReactComponent as Logo} from '../Media/logo_minimal.svg';
import '../Style/Header.css';
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Reducers";
import {logOut} from "../Actions";
import OrderingDropDown from "./OrderingDropDown";

type Props = {
    searchbar: boolean
}

export default function Header(props: Props) {
    const dispatch = useDispatch();
    const loggedIn: boolean = useSelector((state: RootState) => state.user.details.userId !== -1);
    const logInLink = loggedIn ? <div onClick={() => dispatch(logOut())}
                                      className={"nav-link"}
                                      style={{cursor: "pointer"}}>Log out</div>
                               : <Link to={"/login"} className={"nav-link"}>Log in</Link>;
    const searchBar = props.searchbar ? <SearchBar showSuggestions={false} longText={false}/> : null;
    const orderBy = props.searchbar ? <OrderingDropDown options={["title", "length", "year"]}/> : null;
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className={"top-bar"}>
            <Navbar.Brand>MovieDB</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to={"/"} className={"nav-link"}>Home</Link>
                <Link to={"/browse"} className={"nav-link"}>Browse</Link>
                {logInLink}
                <div className="order-by">
                    {orderBy}
                </div>
            </Nav>
            {searchBar}
        </Navbar>
    );
}
