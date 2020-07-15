import React from 'react';
import './App.css';
import BlogPosts from './components/blog-post/BlogPosts';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { GlobalStyle } from './styles/GlobalStyle';
import ToggleTheme from './components/toggle-theme/ToggleTheme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { useColourTheme } from './hooks/useColourTheme';

function App() {
  const [theme, themeToggle] = useColourTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Hacker News Blogs
          </Typography>
        </Toolbar>
      </AppBar>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ToggleTheme theme={theme} toggleTheme={themeToggle} />
        <BlogPosts />
      </ThemeProvider>
    </div>
  );
}

export default App;
