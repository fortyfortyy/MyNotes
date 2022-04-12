import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100%;
    justify-items: center;
    align-items: center;
    grid-gap: 0rem;
    
    
    @media screen and (min-width: 1024px){
        grid-gap: 1rem;
    }
    
`

export const Title = styled.div`
    transition: 1s ease;
    font-size: 22px;
    margin: 0 10px;
    color: #fff;
    text-align: center;
    
    @media screen and (max-width: 768px) {
       font-size: 16px;
       text-align: center;
    }
`

export const Form = styled.div`
    font-size: 16px;
    color: black;
    width: 90%;
    
    & form {
        display: grid;
        justify-items: center;
    }
`

export const P = styled.p`
    color: #fff;
    font-size: 12px;
    font-bold: normal;
`

export const DivButton = styled.div`
    max-width: 70%;
    margin: 40px 10px;
    justify-items: center;
    
    @media screen and (max-width: 640px) {
       max-width: 60%;
    }
`

export const ActivateButton = styled.button`
    transition: 0.5s ease;
    border-radius: 10px;
    padding: 10px 20px;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
        color: #001528;
    }
`