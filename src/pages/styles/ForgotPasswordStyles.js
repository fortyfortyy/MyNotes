import styled from 'styled-components';


export const ResetPasswdFormContainer = styled.div`
    display: grid;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    align-items: stretch;
    padding-top: 30px;
    
    @media screen and (max-width: 768px) {
        grid-gap: 1rem;
    }
`


export const ResetPasswdTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    margin: 0 10px;
    color: #d6d1d1;
    padding: 20px 0px;
    
    @media screen and (max-width: 768px) {
       font-size: 20px;
       text-align: center;
    }
    
    @media screen and (min-width: 1024px) {
       padding: 0px;
    }
`

export const Form = styled.div`
    display: grid;
    font-size: 17px;
    color: black;
    width: 90%;
    justify-items: center;
    align-items: center;
    
    & form {
        display: grid;
        justify-items: center;
        grid-gap: 1rem;
    }
`

export const P = styled.p`
    color: #f6f9fc;
    font-size: 12px;
    font-bold: normal;
    text-align: center;
    
    @media screen and (max-width:  768px) {
       margin-top: 60px;
    }
    
    @media screen and (min-width: 1024px) {
        margin-top: 40px;
    }
`


export const Input = styled.input`
    transition: 0.2s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    margin-bottom: 10px;
    
    &:focus {
        outline: 0;
        border: 4px solid rgba(5, 67, 122, 1);  
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
       margin: 20px 10px;
    }
`

export const ResetPasswdButton = styled.button`
    transition: 0.5s ease;
    border-radius: 10px;
    padding: 10px 20px;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 640px) {
       padding: 10px 5px;
    }
`