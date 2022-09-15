import React, {useContext} from "react";
import {Link} from 'react-router-dom';

import AuthContext from "../context/AuthContext";

import {
    MainPageStyles,
    WhatIsSimpleNotes,
    WhatIsSimpleNotesDiv,
    DemoButtonDiv,
    DemoButton,
    H1,
    P1,
    // ExplanationContainer,
    // ExplanationDiv,
    // ExplanationH2,
} from "./styles/MainPageStyles";


const MainPage = () => {
    let {setDemoUser} = useContext(AuthContext)

    return (
        <MainPageStyles id="homePage">
            <WhatIsSimpleNotes>
                <WhatIsSimpleNotesDiv>
                    <H1>MySimpleNotes</H1>
                    <P1>
                        The ultimate application to create notes. <br/>
                        Everything you need, in one application.
                    </P1>
                    <DemoButtonDiv>
                        <DemoButton>
                            <Link to='/notes' role='button' onClick={setDemoUser}>
                                Try Demo
                            </Link>
                        </DemoButton>
                    </DemoButtonDiv>
                </WhatIsSimpleNotesDiv>
            </WhatIsSimpleNotes>

            {/*<ExplanationContainer>*/}
            {/*    <ExplanationDiv>*/}
            {/*        <ExplanationH2>What is MySimpleNotes?</ExplanationH2>*/}
            {/*        <div>look at that</div>*/}
            {/*        <div>look at that</div>*/}
            {/*        <div>look at that</div>*/}
            {/*        <div>look at that</div>*/}
            {/*        <div>look at that</div>*/}
            {/*        <div>look at that</div>*/}
            {/*    </ExplanationDiv>*/}
            {/*</ExplanationContainer>*/}
        </MainPageStyles>
    )
}

export default MainPage;