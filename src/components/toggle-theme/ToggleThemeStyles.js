import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  padding: 8px;
  margin: 8px 8px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  color: inherit;
  float: right;
`;