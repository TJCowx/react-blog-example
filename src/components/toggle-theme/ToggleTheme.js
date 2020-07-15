import React from 'react';
import { func, string } from 'prop-types';
import { Button } from './ToggleThemeStyles';

// import styled from "styled-components";

// export const Button = styled.button`
//   background: transparent;
//   padding: 8px;
//   margin: 8px 8px;
//   border: 1px solid ${({ theme }) => theme.toggleBorder};
//   border-radius: 4px;
//   color: inherit;
//   float: right;
// `;

export default function ToggleTheme({ theme, toggleTheme }) {
  return <Button theme={theme} onClick={toggleTheme}>Toggle Theme</Button>
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}