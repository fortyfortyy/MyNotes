import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    grid-gap: 1.5rem;
    padding-top: 30px;
`

export const RegisterTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    padding: 20px 0;
`

export const RegisterForm = styled.div`
    display: grid;
    font-size: 17px;
    color: black;
    width: 90%;
    
    & form {
        display: grid;
        grid-gap: 1.3rem;
        justify-items: center;
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
      
    @media screen and (max-width: 768px) {
       padding: 8px 10px;
       font-size: 15px;
    }
`

export const DivButton = styled.div`
    display: grid;
    max-width: 70%;
    margin: 60px 10px;
    grid-gap: 1rem;
    
    @media screen and (max-width: 640px) {
       max-width: 100%;
       margin: 30px 10px;
    }
`

export const P = styled.p`
    color: #d6d1d1;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
    padding: 10px;
    text-decoration: underline;
    
    &:hover {
        transition: 0.5s ease;
        color: #fff;
        cursor: pointer; 
    }
    
    @media screen and (max-width: 768px) {
       padding: 5px 10px;
       font-size: 15px;
    }
`

export const RegisterButton = styled.button`
    transition: 0.5s ease;
    color: #1f2124;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 768px) {
       width: 80%;
       justify-self: center;
    }
`