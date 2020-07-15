import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
  margin-bottom: inherit;
`;

export const SearchField = styled.input`
  color: inherit;
  background: none;
  border: none;
  box-sizing: content-box;
  border-bottom: 1px solid ${theme => theme.toggleBorder};
  font-family: inherit;
  padding: 6px 0 7px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  align-items: center;
`;
