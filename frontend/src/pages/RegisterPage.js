import React, {useEffect, useState} from "react";
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


const RegisterPage = () => {
    return (
        <RegisterFormContainer>
            <RegisterTitle> Create your account </RegisterTitle>
            <RegisterForm>
                <form method='POST'>
                    <label id="id_name">
                        <Input type='text' placeholder='Enter name' id='id_name' required/>
                    </label>
                    <label id="id_email">
                        <Input type='email' placeholder='Enter email' id='id_email' required/>
                    </label>
                    <label id="id_password1">
                        <Input type='password' placeholder='Enter password' id='id_password1' required/>
                    </label>
                    <label id="id_password2">
                        <Input type='password' placeholder='Enter again password' id='id_password2' required/>
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
