import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    padding: 1rem;
    align-items: center;
    justify-items: center;
    color: #f6f9fc;
    
    @media screen and (min-width: 1021px){
        grid-template-rows: repeat(5, 1fr);
    }    
`;

export const H1 = styled.h1`
    font-size: 26px;
`

export const P = styled.p`
    text-align: center;
`
