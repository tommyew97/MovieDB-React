import React from "react";
import Header from "../Components/Header";
import Login from "../Components/Login";
import '../Style/LoginPage.css';

const LoginPage = () => {
    return (<div className={"login-page"}>
        <Header searchbar={false} />
        <div className={"content"}>
            <Login />
        </div>
    </div>)
}

export default LoginPage;