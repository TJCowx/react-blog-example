import React from 'react';
import { func, string } from 'prop-types';

export default function ToggleTheme({ theme, toggleTheme }) {
  return <button onClick={toggleTheme}>Toggle Theme</button>
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}