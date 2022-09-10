import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";


import ReCAPTCHA from "react-google-recaptcha";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";


import AuthContext from "../context/AuthContext";
import {
    RegisterForm,
    RegisterTitle,
    RegisterFormContainer,
    Input,
    RegisterButton,
    DivButton,
    P, I, Label
} from "./styles/RegisterPageStyles";
import {InputError} from "../styles/application";


const RegisterPage = () => {
    let {registerUser, handleRecaptcha, captchaResult} = useContext(AuthContext)

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    const eye = <FontAwesomeIcon icon={faEye}/>;

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        criteriaMode: "all"
    });

    return (
        <RegisterFormContainer>

            <RegisterForm>
                <form method='POST' onSubmit={handleSubmit(registerUser)}>
                    <RegisterTitle> Create your account </RegisterTitle>

                    <Label id="id_first_name">
                        <Input {...register('first_name', {
                            required: "This input is required",
                            maxLength: {
                                value: 30,
                                message: "First name cannot exceed 30 characters",
                            },
                            minLength: {
                                value: 3,
                                message: "First name must exceed 3 characters",
                            },
                        })} placeholder='Enter name' id='id_first_name' type='text' autoComplete='first-name' />
                    </Label>
                    <ErrorMessage
                        errors={errors}
                        name="first_name"
                        render={({messages}) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <InputError key={type}>{message}</InputError>
                                ))
                                : null;
                        }}
                    />

                    <Label id="id_email">
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
                        })} placeholder='Enter email' id='id_email' type='email' autoComplete='email' />
                    </Label>
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

                    <Label id="id_password">
                        <Input id='password' {...register('password', {
                            required: "This input is required",
                            maxLength: {
                                value: 128,
                                message: "Password cannot exceed 128 characters",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must exceed 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: "Password has to contain " +
                                    "miminum eight characters," +
                                    " at least one letter, number and" +
                                    " one special character"
                                ,
                            }
                        })} type={passwordShown ? "text" : "password"} placeholder='Enter password' autoComplete='new-password' />
                        <I onClick={togglePasswordVisiblity}>{eye}</I>
                    </Label>
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

                    <Label id="id_password2">
                        <Input {...register('password2', {
                            required: "This input is required",
                            maxLength: {
                                value: 128,
                                message: "Password cannot exceed 128 characters",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must exceed 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: "Password has to contain " +
                                    "miminum eight characters," +
                                    " at least one letter, number and" +
                                    " one special character"
                                ,
                            }
                        })} type={passwordShown ? "text" : "password"} placeholder='Enter again password'
                               id='id_password2' autoComplete='new-password' />
                    </Label>
                    <ErrorMessage
                        errors={errors}
                        name="password2"
                        render={({messages}) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <InputError key={type}>{message}</InputError>
                                ))
                                : null;
                        }}
                    />

                    <ReCAPTCHA
                        sitekey="6LcSYlAfAAAAAKexdkjx7V90mymtCqUuJx-JOJZS"
                        onChange={handleRecaptcha}
                    />

                    <DivButton>
                        {
                            captchaResult && <RegisterButton type="submit">Sign Up</RegisterButton>
                        }
                        <Link to='/login'>
                            <P>
                                <strong>Already </strong> have an account?
                            </P>
                        </Link>
                    </DivButton>
                </form>
            </RegisterForm>

        </RegisterFormContainer>
    )
}

export default RegisterPage
