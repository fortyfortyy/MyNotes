import styled from 'styled-components';

export const AddButtonS = styled.button`
  font-size: 48px;
  position: absolute;
  bottom: 24px;
  right: 16px;
  background: #f6f9fc;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease
  color: #001528;
  
  &: > svg {
    fill: #041b32;
    width: 50x;
    height: 50px;
  }
  
  &:hover {
    background: #fff;
    opacity: 1;
    transform: scale(1.08);
  }  
  
  @media screen and (max-width: 640px){
    font-size: 40px;
  }
`

// --color-main: #1693DB;
// var(--color-bg);