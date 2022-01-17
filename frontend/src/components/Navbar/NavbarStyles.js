import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  align-items: center;
  margin-bottom: 15px;
  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    align-items: center;
    margin-bottom: 5px;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media screen and (max-width: 640px){
    grid-area: 1 / 1 / 2;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media screen and (max-width: 640px) {
    grid-area: 1 / 2 / 3 / 5;
  }
  
  @media screen and (min-width: 641px) {
    grid-area: 1 / 3 / 3 / 6;
  }
  
    @media screen and (min-width: 1025px) {
    grid-area: 1 / 1 / 3 / 4;
  }
 
`;
export const Div3 = styled.div`
  grid-area: 1 / 6;
  display: flex;
  color: #f5f6f7;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 640px) {
    grid-area: 1 / 4 / 2 / 6;
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

export const A = styled.a`
    align-items: center;
    font-size: 20px;
    
    & > svg {
       font-size: 3rem;
    }
    
    @media screen and (max-width: 640px) {
       display: 'grid';
       font-size: 15px;
       & > svg {
           font-size: 1.9rem;
       }
    }
`