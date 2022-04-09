import React, {useContext, useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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


const ResetPassword = () => {
    let {newUserPassword} = useContext(AuthContext)
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    const eye = <FontAwesomeIcon icon={faEye} />;
    return (
        <Container>
            <NewPasswdTitle>Please enter your new password</NewPasswdTitle>
            <Form>
                <form method='POST' onSubmit={newUserPassword}>
                    <Label id="id_password1">
                        <Input type={passwordShown ? "text" : "password"} name='password1' placeholder='New Password' id='id_password1' required/>
                        <I onClick={togglePasswordVisiblity}>{eye}</I>
                    </Label>
                    <Label id="id_password2">
                        <Input type={passwordShown ? "text" : "password"} name='password2' placeholder='Repeat Password' id='id_password2'
                               required/>
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