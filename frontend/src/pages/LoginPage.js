import React, {useContext} from "react";
import {Link} from 'react-router-dom';

import {
    Input,
    LoginInfo,
    LoginFormContainer,
    LoginTitle,
    LoginForm,
    P,
    LoginButton,
    DivButton,
} from "./styles/LoginPageStyles";

import AuthContext from "../context/AuthContext";


const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <LoginFormContainer>
            <LoginInfo>You need to be logged in to be able using this app</LoginInfo>
            <LoginTitle> Sign in to your account </LoginTitle>
            <LoginForm>
                <form method='POST' onSubmit={ loginUser }>
                    <label id="id_email">
                        <Input type='email' name='email' placeholder='Your email' id='id_email' required/>
                    </label>
                    <label id="id_password">
                        <Input type='password' name='password' placeholder='Your password' id='id_password' required/>
                    </label>
                    <DivButton>
                        <LoginButton type="submit">Sign In</LoginButton>
                        <Link to='/reset/password'>
                            <P>Forgotten password?</P>
                        </Link>
                    </DivButton>
                </form>
            </LoginForm>
        </LoginFormContainer>
    )
}

export default LoginPage