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
    P, I, Label, InputError
} from "./styles/RegisterPageStyles";


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
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });

    return (
        <RegisterFormContainer>
            <RegisterTitle> Create your account </RegisterTitle>

            <RegisterForm>
                <form method='POST' onSubmit={handleSubmit(registerUser)}>

                    <label id="id_first_name">
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
                        })} placeholder='Enter name' id='id_first_name' type='text'/>
                        <ErrorMessage
                            errors={errors}
                            name="first_name"
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

                    <Label id="id_password">
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
                        })} type={passwordShown ? "text" : "password"} placeholder='Enter password' id='id_password'/>
                        <I onClick={togglePasswordVisiblity}>{eye}</I>

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
                    </Label>

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
                        })} type={passwordShown ? "text" : "password"} placeholder='Enter again password' id='id_password2'/>

                        <ErrorMessage
                            errors={errors}
                            name="password2"
                            render={({messages}) => {
                                console.log("messages", messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <InputError key={type}>{message}</InputError>
                                    ))
                                    : null;
                            }}
                        />
                    </Label>

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
