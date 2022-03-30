import styled from 'styled-components';


export const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1693DB;
  padding: 10px;
`

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #d6d1d1;
  
  & svg {
    transition: 0.3s ease;
    cursor: pointer;
    fill: #1693DB;
    width: 30px;
  }
  
  & svg:hover {
    fill: #d6d1d1;
    opacity: 1;
    transform: scale(1.1);
    }
`

export const H3 = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #d6d1d1;
  
  @media screen and (max-width: 640px){
    font-size: 17px;
  }
`


export const Button = styled.button`
  border: none;
  outline: none;
  font-weight: 600;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease;
  
  &:hover {
    color: #d6d1d1;
    opacity: 1;
    transform: scale(1.05);
  }
  
`

export const TextArea = styled.textarea`
  background-color: #2e3235;
  border: none;
  padding: 16px 12px;
  width: 100%;
  height: 70vh;
  resize: none;
  scrollbar-width: none; /* Firefox */
  border-radius: 25px;
  
  &:active {
     outline: none;
     border: none;
  }
  &:focus {
     outline: none;
  }
  &:-webkit-scrollbar {
    display: none;
  }
`