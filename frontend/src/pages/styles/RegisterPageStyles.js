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
    
    @media screen and (max-width: 768px) {
        & form {
            grid-gap: 1.5rem;
        }
    }
`

export const Input = styled.input`
    transition: 0.2s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
     
    &:focus {
        outline: 0;
        border: 4px solid rgba(5, 67, 122, 1);  
    }   
      
    @media screen and (max-width: 768px) {
       font-size: 15px;
       
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
    top: 20%;
    right: 10%;
    color: #05437a;

    :hover {
        color: #001528;
        cursor: pointer;
    }
`


export const Label = styled.label`
    position: relative;
`

export const InputError = styled.p`
    color: #bf1650;
    font-size: 14px;
    
    &:before {
        display: inline;
        content: "⚠ ";
    }
    
    @media screen and (max-width: 768px) {
       font-size: 11px;
    }
`
