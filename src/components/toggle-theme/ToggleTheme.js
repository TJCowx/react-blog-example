import React from 'react';
import propTypes from 'prop-types';
import { Button } from './ToggleThemeStyles';

export default function ToggleTheme({ theme, toggleTheme }) {
  return <Button theme={theme} onClick={toggleTheme}>Toggle Theme</Button>
}

ToggleTheme.propTypes = {
  theme: propTypes.string.isRequired,
  toggleTheme: propTypes.func.isRequired,
}