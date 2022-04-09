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
    min-height: 100vh;
`

 // f6f9fc biały kolor
 // #15314b jasno szaro niebieski
 // #001528 ciemny niebieski
 // linear-gradient(-90deg,#02203c,#001528);