import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
`

export const NewPasswdTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    margin: 0 10px;
    color: #d6d1d1;
    align-self: center;
    
    @media screen and (max-width: 768px) {
       font-size: 20px;
       padding: 50px 0px;
    }
`

export const Form = styled.div`
    display: grid;
    font-size: 17px;
    color: black;
    width: 90%;
    justify-items: center;

    & form {
        display: grid;
        justify-items: center;
        align-items: self-start;
        max-height: 80%;
    }
    
    @media screen and (min-width: 769px) {
       padding: 10px;
       max-height: 85%;
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
    transition: 0.2s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    
    &:focus {
        outline: 0;
        border: 2px solid rgba(255, 255, 255, 0.5);  
    }
    
    @media screen and (max-width:  768px) {
       font-size: 15px;
    }
`

export const DivButton = styled.div`
    max-width: 80%;
    justify-items: center;
    padding: 40px 0px;
    font-size: 17px;
    
    @media screen and (max-width: 640px) {
       font-size: 15px;
    }
`

export const NewPasswdButton = styled.button`
    transition: 0.5s ease;
    border-radius: 10px;
    padding: 10px 20px;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
`

export const I = styled.i`
    position: absolute;
    top: 40%;
    right: 8%;
    
    color: #05437a;

    :hover {
        color: #001528;
        cursor: pointer;
    }
`