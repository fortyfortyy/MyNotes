import React, {useContext} from "react";

import ReCAPTCHA from "react-google-recaptcha";

import AuthContext from "../context/AuthContext";
import {
    ResetPasswdButton,
    ResetPasswdFormContainer,
    DivButton,
    Input,
    Form,
    ResetPasswdTitle,
    P,
} from "./styles/ForgotPasswordStyles";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {InputError} from "../styles/application";


const ForgotPassword = () => {
    let {resetPasswordUser, handleRecaptcha, captchaResult} = useContext(AuthContext)

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        criteriaMode: "all"
    });

    return (
        <ResetPasswdFormContainer>
            <Form>
                <ResetPasswdTitle>Please enter your email to reset password*</ResetPasswdTitle>
                <form method='POST' onSubmit={handleSubmit(resetPasswordUser)}>
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
                        })} type='email' name='email' placeholder='Enter email' id='id_email' required/>
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
                    <ReCAPTCHA
                        sitekey="6LcSYlAfAAAAAKexdkjx7V90mymtCqUuJx-JOJZS"
                        onChange={handleRecaptcha}
                    />
                    <DivButton>
                        {
                            captchaResult && <ResetPasswdButton type="submit">Send request</ResetPasswdButton>
                        }
                    </DivButton>
                </form>
                <P>*Please note if your account is associated with your email address, you should receive an email for
                    the next steps.</P>
            </Form>
        </ResetPasswdFormContainer>
    )
}

export default ForgotPassword;
