import styled from 'styled-components';

export const AddButtonS = styled.button`
  font-size: 48px;
  position: absolute;
  bottom: 24px;
  right: 16px;
  background: #1693DB;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  
  &: > svg {
    fill: #1f2124;
  }
  
  &:hover {
    background: #d6d1d1;
    opacity: 1;
    transform: scale(1.05);
  }  
    
`

// --color-main: #1693DB;
// var(--color-bg);