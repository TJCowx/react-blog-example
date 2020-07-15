import React from 'react';
import { func, string } from 'prop-types';
import { Button } from './ToggleThemeStyles';

export default function ToggleTheme({ theme, toggleTheme }) {
  return <Button theme={theme} onClick={toggleTheme}>Toggle Theme</Button>
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}