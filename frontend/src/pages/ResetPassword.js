import {
    DivButton,
    Form,
    Input,
    NewPasswdButton,
    Container,
    NewPasswdTitle
} from "./styles/ResetPasswordStyles";

import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";


const ResetPassword = () => {
    let {newUserPassword} = useContext(AuthContext)

    return (
        <Container>
            <NewPasswdTitle>Please enter your new password</NewPasswdTitle>
            <Form>
                <form method='POST' onSubmit={newUserPassword}>
                    <label id="id_password1">
                        <Input type='password' name='password1' placeholder='New Password' id='id_password1' required/>
                    </label>
                    <label id="id_password2">
                        <Input type='password' name='password2' placeholder='Repeat Password' id='id_password2'
                               required/>
                    </label>
                    <DivButton>
                        <NewPasswdButton type="submit">Set New Password</NewPasswdButton>
                    </DivButton>
                </form>
            </Form>
        </Container>
    )
}
export default ResetPassword;