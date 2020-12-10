import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Reducers";
import {logOut} from "../Actions";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/esm/Nav";

const Login = () => {
    const [type, setType] = useState<"login" | "create">("login");
    const loggedIn = useSelector((state: RootState) => state.user.details.username);
    const formMessage = useSelector((state: RootState) => state.user.form);
    const dispatch = useDispatch();

    const determineRender = () => {
        if (loggedIn)
            return (
                <Button variant={"primary"} onClick={() => dispatch(logOut())}>Log out</Button>
            );
        else
            return (
                <React.Fragment>
                    <Card.Header as={"h4"}>
                        <Nav variant={"tabs"} defaultActiveKey={"login"}>
                            <Nav.Item >
                                <Nav.Link active={type === "login"}
                                          onClick={() => setType("login")}>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => setType("create")}>
                                <Nav.Link
                                    active={type === "create"}
                                    onClick={() => setType("create")}>Create</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <LoginForm type={type}/>
                        <Card.Text>
                            {formMessage}
                        </Card.Text>
                    </Card.Body>
                </React.Fragment>
            );
    };
    return (
        <div className={"login"}>
            <Card>
                {determineRender()}
            </Card>
        </div>
    );
};

export default Login;


