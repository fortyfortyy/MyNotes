import styled from 'styled-components';


export const LoginInfo = styled.div`
    transition: 1s ease;
    font-size: 20px;
    text-align: center;
    margin: 0 8px;
    color: #d6d1d1;
    justify-self: center;
    padding-bottom: 50px;
    
    @media screen and (max-width: 768px) {
       font-size: 16px;
    }     
    
    @media screen and (max-width: 640px) {
       font-size: 14px;
    }
    
    @media screen and (min-width: 1024px) {
        padding-top: 60px;
        padding-bottom: 0px;
    }
    
`

export const LoginFormContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0 auto;
    
    @media screen and (min-width: 1024px) {
        grid-gap: 2.5rem;
    }
    
`

export const LoginTitle = styled.div`
    transition: 1s ease;
    font-size: 22px;
    color: #d6d1d1;
    justify-self: center;
    padding: 30px 0px;
    
    @media screen and (max-width: 768px) {
       font-size: 20px;
       padding: 20px 0px;
    }
`

export const LoginForm = styled.div`
    display: grid;
    font-size: 17px;
    width: 90%;
    
    & form {
        display: grid;
        grid-gap: 1.5rem;
        justify-items: center;
        
        @media screen and (max-width: 724px) {
            grid-gap: 1.3rem;
        }
    }

    @media screen and (min-width: 1024px) {
        padding-bottom: 80px;
    }
`

export const Input = styled.input`
    transition: 0.2s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    color: #001528 !important;
    
    &:focus {
        outline: 0;
        border: 4px solid rgba(5, 67, 122, 1);  
    }
    
    @media screen and (max-width:  768px) {
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
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;
    
    & :nth-child(3){
        grid-area: 2 / 1 / 2 / 3;
    }
    
    @media screen and (max-width: 640px) {
       grid-gap: 0;
       max-width: 100%;     
    }
`

export const P = styled.p`
    color: #d6d1d1;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
        transition: 0.2s ease;
        color: #f6f9fc;
        cursor: pointer; 
    }
    
    @media screen and (max-width: 1024px) {
       font-size: 15px;
    }
    
    @media screen and (max-width: 1280px) {
       padding: 5px 20px;
    }
`

export const P2 = styled.p`
    color: #d6d1d1;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        transition: 0.2s ease;
        color: #f6f9fc;
        cursor: pointer; 
    }
    
    @media screen and (max-width: 1024px) {
       font-size: 15px;
    }
    
    @media screen and (max-width: 1280px) {
       padding: 5px 20px;
    }
`

export const LoginButton = styled.button`
    transition: 0.5s ease;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px 20px;
    grid-area: 1/ 1/ 1/ 4;
    width: 50%;
    color: #001528;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 640px) {
       font-size: 15px;
    }
`