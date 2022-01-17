import styled from 'styled-components';


// export const DivNotes = styled.div`
// `

export const NotesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
`

export const NotesTitle = styled.h2`
  color: #1693DB;
  font-size: 24px;
  font-weight: 600;
`
// color: var(--color-main);
export const NotesCount = styled.p`
  font-size: 18px;
  color: #1693DB;
`
// color: var(--color-main);
  // --color-main: #1693DB;

export const NotesList = styled.div`
  padding: 0;
  margin: 16px 0;
  height: 70vh;
  overflow-y: auto;
  scrollbar-width: none; 
  &:-webkit-scrollbar {
       display: none;
  }
`

