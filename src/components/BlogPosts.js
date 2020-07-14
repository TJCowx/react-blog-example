import React, { useEffect, useState } from 'react';
import { BlogPost } from './BlogPost';
import { getNewPostIds } from '../services/HackerNewsAPI';
import { GlobalStyle, BlogPostsWrapper } from '../styles/BlogPostsStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export default function BlogPosts() {
  const { count } = useInfiniteScroll();
  const [postIds, setPostIds] = useState([]);

  useEffect(() => {
    console.log(count);
    getNewPostIds().then(res => setPostIds(res));
  }, []);

  return <div>
    <GlobalStyle />
    <BlogPostsWrapper>
      <h1>BLOG</h1>
      <ul>
        {postIds.slice(0, 5).map(postId => {
          return <BlogPost key={postId} postId={postId} />
        })}
      </ul>
    </BlogPostsWrapper>
  </div>;
}