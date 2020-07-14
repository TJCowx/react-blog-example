import React from 'react';
import './App.css';
import BlogPosts from './components/blog-post/BlogPosts';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { GlobalStyle } from './styles/GlobalStyle';

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
      <GlobalStyle />
      <BlogPosts />
    </div>
  );
}

export default App;
