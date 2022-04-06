import React, {useContext} from "react";
import {Link} from 'react-router-dom';

import {
    RegisterForm,
    RegisterTitle,
    RegisterFormContainer,
    Input,
    RegisterButton,
    DivButton,
    P,
} from "./styles/RegisterPageStyles";
import AuthContext from "../context/AuthContext";


const RegisterPage = () => {
    let {registerUser} = useContext(AuthContext)
    return (
        <RegisterFormContainer>
            <RegisterTitle> Create your account </RegisterTitle>
            <RegisterForm>
                <form method='POST' onSubmit={registerUser}>
                    <label id="id_first_name">
                        <Input type='text' name='first_name' placeholder='Enter name' id='id_first_name' required/>
                    </label>
                    <label id="id_email">
                        <Input type='email' name='email' placeholder='Enter email' id='id_email' required/>
                    </label>
                    <label id="id_password">
                        <Input type='password' name='password' placeholder='Enter password' id='id_password' required/>
                    </label>
                    <label id="id_password2">
                        <Input type='password' name='password2' placeholder='Enter again password' id='id_password2'
                               required/>
                    </label>
                    <DivButton>
                        <RegisterButton type="submit">Sign Up</RegisterButton>
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
