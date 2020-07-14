import React, { useEffect, useState } from 'react';
import { BlogPost } from './BlogPost';
import { getNewPostIds } from '../services/HackerNewsAPI';
import { GlobalStyle, BlogPostsWrapper } from '../styles/BlogPostsStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import SearchPosts from './SearchPosts';

export default function BlogPosts() {
  const { count } = useInfiniteScroll();
  const [postIds, setPostIds] = useState([]);
  const [filter, setFilter] = useState([]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };


  useEffect(() => {
    console.log(count);
    getNewPostIds().then(res => setPostIds(res));
  }, []);

  return <div>
    <GlobalStyle />
    <BlogPostsWrapper>
      <h1>Blog Posts</h1>
      <SearchPosts filter={filter} handleFilter={handleFilter} />
      <ul>
        {postIds.slice(0, 5).map(postId => {
          return <BlogPost key={postId} postId={postId} />
        })}
      </ul>
    </BlogPostsWrapper>
  </div>;
}