import React, {useContext, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

import AuthContext from "../context/AuthContext";
import {
    DivButton,
    Form,
    Input,
    NewPasswdButton,
    Container,
    NewPasswdTitle
} from "./styles/ResetPasswordStyles";
import {I, Label} from "./styles/RegisterPageStyles";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {InputError} from "../styles/application";


const ResetPassword = () => {
    let {newUserPassword} = useContext(AuthContext)
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
        <Container>
            <NewPasswdTitle>Please enter your new password</NewPasswdTitle>
            <Form>
                <form method='POST' onSubmit={handleSubmit(newUserPassword)}>
                    <Label id="id_password1">
                        <Input {...register('password1', {
                            required: "This input is required",
                            maxLength: {
                                value: 128,
                                message: "Password cannot exceed 128 characters",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must exceed 8 characters",
                            },
                        })} type={passwordShown ? "text" : "password"} placeholder='New Password'
                               id='id_password1' required/>

                        <I onClick={togglePasswordVisiblity}>{eye}</I>
                        <ErrorMessage
                            errors={errors}
                            name="password1"
                            render={({messages}) => {
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
                        })} type={passwordShown ? "text" : "password"} placeholder='Repeat Password'
                               id='id_password2'
                               required/>
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
                    </Label>
                    <DivButton>
                        <NewPasswdButton type="submit">Set New Password</NewPasswdButton>
                    </DivButton>
                </form>
            </Form>
        </Container>
    )
}
export default ResetPassword;