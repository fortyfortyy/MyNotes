import styled from 'styled-components';


export const LoginInfo = styled.div`
    transition: 1s ease;
    font-size: 20px;
    text-align: center;
    padding-bottom: 30px;
    margin: 0 8px;
    
    @media screen and (max-width: 768px) {
       font-size: 16px;
    }     
    
    @media screen and (max-width: 640px) {
       font-size: 14px;
       padding-top: 60px;
    }
`

export const LoginFormContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    grid-gap: 1.5rem;
`

export const LoginTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    
    @media screen and (max-width: 768px) {
       font-size: 20px;
    }
`

export const LoginForm = styled.div`
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
    
    @media screen and (max-width:  768px) {
       padding: 8px 10px;
       font-size: 15px;
    }
`

export const DivButton = styled.div`
    display: grid;
    max-width: 70%;
    margin: 60px 10px;
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;
    
    & :nth-child(3){
        grid-area: 2 / 1 / 2 / 3;
    }

    @media screen and (min-width: 641px) {
       & :nth-child(1){
            // padding-right: 20px;
       }

       & :nth-child(2){
            // padding-left: 20px;
       }
    }
    
    
    @media screen and (max-width: 640px) {
       grid-gap: 0;
       max-width: 100%;
       margin: 30px 10px;       
    }
`


export const P = styled.p`
    color: #d6d1d1;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
        transition: 0.5s ease;
        color: #fff;
        cursor: pointer; 
    }
    
    @media screen and (max-width: 1024px) {
       font-size: 15px;
       padding: 8px 18px;
    }
    
    @media screen and (max-width: 1280px) {
       padding: 25px 20px;
    }
`

export const P2 = styled.p`
    color: #d6d1d1;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        transition: 0.5s ease;
        color: #fff;
        cursor: pointer; 
    }
    
    @media screen and (max-width: 1024px) {
       font-size: 15px;
       padding: 8px 18px;
    }
    
    @media screen and (max-width: 1280px) {
       padding: 25px 20px;
    }
`


export const LoginButton = styled.button`
    transition: 0.5s ease;
    color: #1f2124;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    grid-area: 1/ 1/ 1/ 4;
    width: 50%;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 640px) {
       font-size: 15px;
    }
`