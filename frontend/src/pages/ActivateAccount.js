import React, {useContext} from "react";

import AuthContext from "../context/AuthContext";
import {
    DivButton,
    Form,
    ActivateButton,
    Container,
    Title,
} from "./styles/ActivateAccountStyles";


const ActivateAccount = () => {
    let {activateAccount} = useContext(AuthContext)

    return (
        <Container>
            <Title>Please click the button to activate your account</Title>
            <Form>
                <form method='POST' onSubmit={activateAccount}>
                    <DivButton>
                        <ActivateButton type="submit">Activate</ActivateButton>
                    </DivButton>
                </form>
            </Form>
        </Container>
    )
}
export default ActivateAccount;