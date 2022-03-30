import styled from 'styled-components';

export const DivApp = styled.div`
  justify-self: center;
  width: 95%;
  max-width: 500px;
  margin: 0 5px;
  background-color: #2e3235;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  align-self: center;
  border-radius: 25px;
`;

//  background-color: var(--color-white);


export const MainContainer = styled.div`
    transition: 1s ease;
    width: 100%;
    color: #d6d1d1;
    background-color: #1f2124;
    display: grid;
    justify-items: stretch;
    margin-bottom: 60px;
    
    @media screen and (min-width: 641px) {
        grid-gap: 2rem;
    }
    
    @media screen and (min-width: 895px) {
        margin-bottom: 40px;
    }
`
