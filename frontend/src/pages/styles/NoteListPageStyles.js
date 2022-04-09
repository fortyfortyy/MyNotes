import styled from 'styled-components';

export const NotesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f6f9fc;
  padding: 10px 16px;
  
  @media screen and (max-width: 640px){
      padding: 0px 16px;
  }
`

export const NotesTitle = styled.h2`
  color: #f6f9fc;
  font-size: 24px;
  font-weight: 600;
`

export const NotesCount = styled.p`
  font-size: 18px;
  color: #f6f9fc;
`

export const NotesList = styled.div`
  padding: 0;
  margin: 16px 0;
  height: 68vh;
  overflow-y: auto;
  scrollbar-width: none; 
  &:-webkit-scrollbar {
       display: none;
  }
`