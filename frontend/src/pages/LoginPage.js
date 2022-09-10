import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

import AuthContext from "../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

import {
    Input,
    LoginFormContainer,
    LoginTitle,
    LoginForm,
    P,
    LoginButton,
    DivButton, P2, P3, DemoButton,
} from "./styles/LoginPageStyles";
import {InputError} from "../styles/application";


const LoginPage = () => {
    let {loginUser, handleRecaptcha, captchaResult, setDemoUser} = useContext(AuthContext)

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        criteriaMode: "all"
    });

    return (
        <LoginFormContainer id="loginPage">
            <LoginForm>
                <LoginTitle> Sign in to your account </LoginTitle>
                <form method='POST' onSubmit={handleSubmit(loginUser)}>
                    <label id="id_email">
                        <Input {...register('email', {
                            required: "This input is required",
                            maxLength: {
                                value: 50,
                                message: "Email cannot exceed 50 characters",
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email, please enter the correct one",
                            }
                        })} placeholder='Enter email' id='id_email' type='email' autoComplete='email'/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({messages}) => {
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
                        })} type='password' placeholder='Enter password' id='id_password' autoComplete='current-password'/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({messages}) => {
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
                        {
                            captchaResult && <LoginButton type="submit">Sign In</LoginButton>
                        }
                        <Link to='/reset/password'>
                            <P>Forgotten password?</P>
                        </Link>
                        <Link to='/register'>
                            <P2>Create account</P2>
                        </Link>
                    </DivButton>
                </form>
                <DemoButton>
                    <Link to='/' onClick={setDemoUser}>
                        <P3>Try demo</P3>
                    </Link>
                </DemoButton>
            </LoginForm>

        </LoginFormContainer>
    )
}

export default LoginPage