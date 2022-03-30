import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 1rem;
    padding-top: 2rem;
    align-items: center;
    justify-items: center;
    padding-bottom: 50px;
 
    @media screen and (max-width: 640px) {
        font-size: 10px;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 0.5rem;
        padding-bottom: 40px;
    }
`;

export const Div1 = styled.div`
    font-size: 1.2rem;
    padding: 10px;
    
    @media screen and (min-width: 641px){
        justify-self: center;
        font-size: 1.2rem;
    }
    
    @media screen and (min-width: 641px){
          grid-area: 1 / 1 / 2 / 2;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: center;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1024px){
        grid-area: 1 / 1 / 2 / 3;
        margin-right: 30px;
    }
    
    @media screen and (max-width: 640px){
        display: none;
    }
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
    
    @media screen and (max-width: 640px) {
        grid-area: 1 / 1 / 2 / 2;
        font-size: 1.2rem;
    } 
    
    @media screen and (mix-width: 821px) {
         margin-right: 30px;
    }
`;

export const Div3 = styled.div`
    grid-area: 1 / 6;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-self: center;
    justify-items: center;
    align-items: center;
    grid-gap: 1.5rem;
    align-items: center;  
    font-size: 1.5rem;
    
    &:hover {
        color: #fff;
    }
    
    & > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
        justify-self: center;
    }

    @media screen and (max-width: 768px){
    & > :nth-child(1) {
        grid-area: 1 / 3;
    } 
    
    @media screen and (max-width: 640px){
        grid-gap: 0;
    } 
    
    & > :nth-child(2) {
        grid-area: 1 / 1;
    } 
    
    & > :nth-child(3) {
        grid-area: 1 / 5;
    }
     
    & > :nth-child(4) {
        grid-area: 1 / 6;
    } 
    
    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(6, 1fr);
        grid-area: 1 / 1 / 1 / 4;
        padding: 10px;
        font-size: 1.2rem;
        width: 100%;
    }
`;

// Navigation Links
export const NavLink = styled.a`
    font-size: 1.5rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    
    
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
        padding: 0.5rem;
}
`;

// Social Icons 

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: #d6d1d1;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        color: #fff;
        background-color: #383a3f;
        transform: scale(1.2);
        cursor: pointer; 
    }
`

export const A = styled.div`
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