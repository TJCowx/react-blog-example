import React from 'react';
import './App.css';
import BlogPosts from './components/blog-post/BlogPosts';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { GlobalStyle } from './styles/GlobalStyle';
import { useState } from 'react';
import ToggleTheme from './components/toggle-theme/ToggleTheme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { useColourTheme } from './hooks/useColourTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const [theme, themeToggle] = useColourTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
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
