import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    grid-gap: 1.5rem;
    padding: 60px 0px;
    
    @media screen and (max-width: 768px) {
       padding: 0px;
    }
`

export const RegisterTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    color: #d6d1d1;
    justify-self: center;
`

export const RegisterForm = styled.div`
    display: grid;
    font-size: 17px;
    width: 90%;
    padding: 0px;
    
    & form {
        display: grid;
        justify-items: center;
        grid-gap: 2rem;
    }
    
    @media screen and (max-width: 768px) {
       & form {
          grid-gap: 1.3rem;
       }
    }
`

export const Input = styled.input`
    transition: 0.2s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    color: black;
    
    &:focus {
        outline: 0;
        border: 4px solid rgba(5, 67, 122, 1);  
    }   
      
    @media screen and (max-width: 768px) {
       &:focus {
           border: 3px solid rgba(67, 128, 255, 1); 
       }
    }
`

export const DivButton = styled.div`
    display: grid;
    max-width: 70%;
    margin: 30px 10px;
    grid-gap: 1rem;
    color: #001528;
    
    @media screen and (max-width: 640px) {
       max-width: 100%;
       padding-bottom: 20px;   
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

export const I = styled.i`
    position: absolute;
    top: 22%;
    right: 10%;
    color: #05437a;

    :hover {
        color: #001528;
        cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
       top: 26%;
    }
    
`

export const Label = styled.label`
    position: relative;
`