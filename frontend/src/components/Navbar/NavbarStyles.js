import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 30px;
    align-items: center;
    justify-items: center;
 
    @media screen and (max-width: 640px) {
        font-size: 10px;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
        padding: 15px;
    }
    
    @media screen and (min-width: 1021){
        grid-template-columns: repeat(7, 1fr);
    }   
`;

export const Div1 = styled.div`
    font-size: 1.2rem;
    padding: 10px;
    padding-left: 30px;
    justify-self: start;
    
    @media screen and (max-width: 640px){
        padding: 0px;
        display: none;
    }
`;

export const Div11 = styled.div`
    padding-top: 10px;
    justify-self: start;
`;

export const Div2 = styled.div`
    grid-area: 1 / 2 / 3 / 3;
    
    @media screen and (max-width: 640px) {
        display: none;
    } 
    
    @media screen and (max-width: 1024px) {
        grid-area: 1 / 2 / 3 / 4;
        margin-left: 20px;
    }
`;

export const DivUser = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-area: 1 / 5;
    font-size: 1.5rem;
    margin-right: 20px;
    
    @media screen and (max-width: 640px) {
        grid-area: 1 / 1 / 1 / 3;
        font-size: 1.2rem;
        justify-self: start;
        padding: 20px;
    } 
    
    @media screen and (max-width: 1020px) {
         margin-right: 30px;
    }
    
    @media screen and (min-width: 1021px) {
        grid-area: 1 / 5 / 1 / 7;
        
    }
`;

export const Div3 = styled.div`
    grid-area: 1 / 6;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-self: center;
    justify-items: center;
    align-items: center;
    grid-gap: 1.5rem;
    align-items: center;  
    font-size: 1.5rem;
    width: 80%;
    color: #fff!important;
    
    &:hover {
        color: #fff;
    }
    
    & > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
        justify-self: center;
    }

    @media screen and (max-width: 768px) {
        // width: 80%;
        & > :nth-child(1) {
            grid-area: 1 / 3;
        } 
        
        & > :nth-child(2) {
            grid-area: 1 / 1;
        } 
        
        & > :nth-child(3) {
            grid-area: 1 / 2;
        }
         
        & > :nth-child(4) {
            grid-area: 1 / 6;
        } 
    }
    
    @media screen and (max-width: 640px) {
        grid-area: 1 / 4;
        padding: 10px;
        font-size: 1.2rem;
        width: 100%;
        display: grid;
        grid-gap: 0;
        
        & > :nth-child(1){
            grid-area: 2 / 1 / 2 / 3;
        }
    }
    
    @media screen and (max-width: 1200px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0;
        
        & > :nth-child(1){
            grid-area: 2 / 1 / 2 / 3;
        }
    }
    
    @media screen and (min-width: 821px) {
        grid-template-columns: repeat(3, 1fr);
        grid-area: 1 / 7;
        grid-gap: 0;
    }
    
`;

export const Div4 = styled.div`
    grid-area: 1 / 6;
    display: grid;
    align-items: center;
    grid-gap: 0.5rem;
    color: #fff !important;
    
    &:hover {
        color: #fff;
    }
          
    & > :nth-child(1) {
        grid-area: 1 / 1;
    } 
    
    & > :nth-child(2) {
        grid-area: 1 / 2;
    } 
    
    & > :nth-child(3) {
        grid-area: 1 / 3 / 1 / 4;
    }

    
    @media screen and (max-width: 820px) {
        grid-gap: 0;
        width: 80%;
        grid-template-columns: repeat(2, 1fr);
        
        & > :nth-child(1) {
            grid-area: 1 / 1;
        } 
        
        & > :nth-child(2) {
            grid-area: 1 / 2;
        } 
        
        & > :nth-child(3) {
            grid-area: 2 / 1 / 2 / 3;
        }
    }
    
    @media screen and (max-width: 640px) {
        padding: 5px;
        font-size: 1.2rem;
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        
        & > :nth-child(1){
            grid-area: 1 / 1;
        }
        
        & > :nth-child(2) {
            grid-area: 1 / 2;
        } 
        
        & > :nth-child(3) {
            grid-area: 2 / 1 / 2 / 3;
        }
        
    }
    
`;


// Navigation Links
export const NavLink = styled.a`
    font-size: 1.5rem;
    line-height: 32px;
    color: #fff!important;
    transition: 0.2s;
    border: none;
    
    
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
        border-bottom: 2px solid #626ee3;
    }
    
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
        padding: 0.5rem;
}
`;

// Social Icons 

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    padding: 8px;
    color: #fff!important;
    
    &:hover {
        color: #fff;
        background-color: ##f6f9fc;
        transform: scale(1.2);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 768px) {
        padding: 4px;
     }
    
`

export const A = styled.div`
    color: #fff!important;
     & > svg {
           font-size: 3rem;
     }
     
     @media screen and (max-width: 768px) {
        align-items: center;
        
        & > svg {
           font-size: 2.4rem;
           margin: 2px;
        }  
     }
`

export const LoginButton = styled.a`
    transition: opacity .4s,transform .4s;
    transform: scale(1);
    opacity: 1;
    width: 100%;
    padding: 6px 20px;
    color: #fff;
    background: #626ee3;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    padding: 13px;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    @media screen and (max-width: 1800px) {
        font-size: 14px;
    }
    
    @media screen and (max-width: 1200px) {
        min-width: 85px;
        padding: 13px;
    }

`