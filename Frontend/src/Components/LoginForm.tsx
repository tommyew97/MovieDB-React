import {useForm} from "react-hook-form";
import React from 'react';
import {useDispatch} from "react-redux";
import {logIn} from "../Actions";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

type FormValues = {
    username: string,
    password: string,
}

type Props = { type: "login" | "create" }

const LoginForm = (props: Props) => {
    const {register, errors, handleSubmit} = useForm<FormValues>({
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
    });
    const dispatch = useDispatch();
    const onSubmit = (data: FormValues) => {
        dispatch(logIn(data.username, data.password, props.type));
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"username-field"}>
                    <p>Username</p>
                    <input
                        className={"text-input"}
                        name={'username'}
                        type={'text'}
                        ref={register({
                            required: {value: true, message: 'You must input a username'},
                            minLength: {
                                value: 5,
                                message: 'Username must be minimum 5 characters',
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/,
                                message: 'Username must be only letters/numbers',
                            },
                        })}
                    /></div>
                <div className={"password-input"}>
                    <p>Password</p>
                    <input
                        className={"form-text-input"}
                        name={'password'}
                        type={'password'}
                        ref={register({
                            required: {value: true, message: 'You must input a password'},
                            minLength: {
                                value: 8,
                                message: "Password must be minimum 8 characters"
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Password must contain least one number and one character',
                            },
                        })}
                    /></div>
                <Button variant={"primary"} type={'submit'}>Submit</Button>
                {(errors.username || errors.password) && (
                    <div>
                        <ul>
                            {errors?.username && errors?.username?.types?.pattern && (
                                <li>Username must be only letters and numbers</li>
                            )}
                            {errors?.username && errors?.username?.types?.minLength && (
                                <li>Username must be minimum 5 characters</li>
                            )}
                            {errors?.username && errors?.username?.types?.required && (
                                <li>You must enter a username</li>
                            )}
                            {errors?.password?.types?.pattern && (
                                <li>Password have at least one number and one
                                    character</li>
                            )}
                            {errors?.password?.types?.minLength && (
                                <li>Password must be minimum 8 characters</li>
                            )}
                            {errors?.password && errors?.password?.types?.required && (
                                <li>You must enter a password</li>
                            )}
                        </ul>
                    </div>
                )}
            </form>
        </React.Fragment>)
};

export default LoginForm;
