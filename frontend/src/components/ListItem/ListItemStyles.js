import styled from 'styled-components';


export const NotesListItem = styled.div`
  border-bottom: 1px solid #252629;
  margin-bottom: 12px;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  
  :hover {
    background-color: #1f2124;
    cursor: pointer;
  }
`
// border-bottom: 1px solid  var(--color-border);

export const H3 = styled.h3`
  font-weight: 600;
`

export const P = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #acb4bd;
  color: #999;
  display: inline-block;
  margin-right: 8px;
`

  // color: var(--color-light);  #acb4bd
  // color: var(--color-gray); #999

export const Span = styled.span`
  font-weight: 600;
  color: #999;
  display: inline-block;
  margin-right: 8px;
`