import React, {useContext} from "react";

import {
    ResetPasswdButton,
    ResetPasswdFormContainer,
    DivButton,
    Input,
    Form,
    ResetPasswdTitle,
    P,
} from "./styles/ForgotPasswordStyles";

import AuthContext from "../context/AuthContext";


const ForgotPassword = () => {
    let { resetPasswordUser } = useContext(AuthContext)

    return (
        <ResetPasswdFormContainer>
            <ResetPasswdTitle>Please enter your email to reset your password*</ResetPasswdTitle>
            <Form>
                <form method='POST' onSubmit={ resetPasswordUser }>
                    <label id="id_email">
                        <Input type='email' name='email' placeholder='Your email' id='id_email' required/>
                    </label>
                    <DivButton>
                        <ResetPasswdButton type="submit">Send request</ResetPasswdButton>
                    </DivButton>
                </form>
                <P>*Please note if your account is associated with your email address, you should receive an email for the next steps.</P>
            </Form>
        </ResetPasswdFormContainer>
    )
}

export default ForgotPassword;
