import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100%;
    justify-items: center;
    padding-top: 70px;
`

export const Title = styled.div`
    transition: 1s ease;
    font-size: 22px;
    margin: 0 10px;
    
    @media screen and (max-width: 768px) {
       font-size: 20px;
       padding-top: 50px;
       text-align: center;
    }
`

export const Form = styled.div`
    display: grid;
    font-size: 17px;
    color: black;
    width: 90%;

    & form {
        display: grid;
        justify-items: center;
        grid-gap: 1.2rem;
    }
`

export const P = styled.p`
    color: #fff;
    font-size: 12px;
    font-bold: normal;
    
    
    @media screen and (min-width: 1024px) {
        margin-top: 40px;
    }
`

export const Input = styled.input`
    transition: 0.5s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    
    &:focus {
        outline: 0;
        border: 2px solid rgba(255, 255, 255, 0.5);  
    }
    
    @media screen and (max-width:  768px) {
       padding: 5px 10px;
       font-size: 15px;
    }
`

export const DivButton = styled.div`
    display: grid;
    max-width: 70%;
    margin: 40px 10px;
    grid-gap: 1rem;
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
    }
`