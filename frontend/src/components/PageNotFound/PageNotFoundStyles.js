import React from 'react';

import {Container, H1, P} from './PageNotFound';
import {useHistory} from "react-router-dom";

const PageNotFound = () => {

    const history = useHistory()

    return (
        <Container>
            {/*{*/}
            {/*    setTimeout(function () {*/}
            {/*        history.push('/login')*/}
            {/*    }, 7000)*/}
            {/*}*/}
            <H1>ERROR 404</H1>
            <P> Ups... something gone wrong! This page doesnt exist!</P>
        </Container>
    );
}

export default PageNotFound;