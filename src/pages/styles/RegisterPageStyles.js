import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    grid-gap: 1.5rem;
    padding-top: 50px;
    
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
    font-size: 17px;
    width: 90%;
    padding: 20px;
    
    & form {
        display: grid;
        justify-items: center;
        grid-gap: 1.5rem;
    }
    
    @media screen and (max-width: 768px) {
       & form {
          grid-gap: 1rem;
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
    padding-top: 20px;
    color: #001528;
    
    @media screen and (max-width: 640px) {
       font-size: 15px;
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
    top: 30%;
    right: 8%;
    
    color: #05437a;

    :hover {
        color: #001528;
        cursor: pointer;
    }
`

export const Label = styled.label`
    position: relative;
    max-width: 500px;
    display: grid;
    justify-items: center;
    
    &:nth-child(1){
        max-width: 300px;
    }
    
    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`