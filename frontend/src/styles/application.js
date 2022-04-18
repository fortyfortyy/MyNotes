import styled from 'styled-components';

export const DivApp = styled.div`
  justify-self: center;
  width: 95%;
  max-width: 600px;
  margin: 0 5px;
  background-color: #15314b;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  align-self: center;
  border-radius: 25px;
  
  @media screen and (max-width: 819px) {
      max-width: 500px;
  }
  
`;

export const MainContainer = styled.div`
    transition: 1s ease;
    width: 100%;
    color: #d6d1d1;
    background: linear-gradient(-90deg, #02203c, #001528);
    display: grid;
    grid-template-rows: 0.2fr 1.5fr 0.2fr;
    grid-gap: 3rem;
    min-height: 100vh;
    
    @media screen and (max-width: 819px) {
      grid-gap: 4rem;
    }
    
`


export const InputError = styled.p`
    color: #bf1650;
    font-size: 14px;
    text-align: center;
    margin: 0;
    
    &:before {
        display: inline;
        content: "⚠ ";
    }
    
    @media screen and (max-width: 768px) {
       font-size: 11px;
       max-width: 270px;
    }
`

// #f6f9fc biały kolor
// #15314b jasno szaro niebieski
// #001528 ciemny niebieski
// linear-gradient(-90deg,#02203c,#001528);