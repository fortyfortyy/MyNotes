import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

import AuthContext from "../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

import {
    Input,
    LoginInfo,
    LoginFormContainer,
    LoginTitle,
    LoginForm,
    P,
    LoginButton,
    DivButton, P2
} from "./styles/LoginPageStyles";
import {InputError} from "./styles/RegisterPageStyles";


const LoginPage = () => {
    let {loginUser, handleRecaptcha, captchaResult} = useContext(AuthContext)

    const {
        register,
        formState: {errors},
    } = useForm({
        criteriaMode: "all"
    });

    return (
        <LoginFormContainer id="loginPage">
            <LoginInfo>You need to be logged in to be able using this app</LoginInfo>
            <LoginTitle> Sign in to your account </LoginTitle>

            <LoginForm>
                <form method='POST' onSubmit={loginUser}>
                    <label id="id_email">
                        <Input {...register('email', {
                            required: "This input is required",
                            maxLength: {
                                value: 50,
                                message: "Email cannot exceed 50 characters",
                            },
                            minLength: {
                                value: 6,
                                message: "Email must exceed 6 characters",
                            },
                        })} placeholder='Enter email' id='id_email' type='email'/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({messages}) => {
                                console.log("messages", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <InputError key={type}>{message}</InputError>
                                    ))
                                    : null;
                            }}
                        />
                    </label>

                    <label id="id_password">
                        <Input {...register('password', {
                            required: "This input is required",
                            maxLength: {
                                value: 128,
                                message: "Password cannot exceed 128 characters",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must exceed 8 characters",
                            },
                        })} type='password' placeholder='Enter password' id='id_password'/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({messages}) => {
                                console.log("messages", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <InputError key={type}>{message}</InputError>
                                    ))
                                    : null;
                            }}
                        />
                    </label>

                    <ReCAPTCHA
                        sitekey="6LcSYlAfAAAAAKexdkjx7V90mymtCqUuJx-JOJZS"
                        onChange={handleRecaptcha}
                    />

                    <DivButton>
                        {/*{*/}
                        {/*    captchaResult && <LoginButton type="submit">Sign In</LoginButton>*/}
                        {/*}*/}
                        <LoginButton type="submit">Sign In</LoginButton>
                        <Link to='/reset/password'>
                            <P>Forgotten password?</P>
                        </Link>
                        <Link to='/register'>
                            <P2>Create account</P2>
                        </Link>
                    </DivButton>
                </form>
            </LoginForm>

        </LoginFormContainer>
    )
}

export default LoginPage