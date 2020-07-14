/**
 * BlogPost.js
 * Handles the displaying of an individual blog post
 */

import React, { useEffect, useState, memo } from 'react';
import { getPost } from '../services/HackerNewsAPI';
import { BlogPostWrapper, PostTitle, PostInfo, PostInfoElement, PostImage, PostDescription } from '../styles/BlogPostStyles';
import { convertUnixTime } from '../utils/convertUnixTime';

export const BlogPost = memo(function BlogPost({ postId }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Get the information required for this post
    getPost(postId).then(res => setPost(res));
  })


  return <BlogPostWrapper>
    <PostImage>
      <img src={post.imgUrl}></img>
    </PostImage>
    <PostDescription>
      <PostTitle>
        <a href={post.url}>{post.title}</a>
      </PostTitle>
      <PostInfo>
        <span>
          <PostInfoElement>By:</PostInfoElement> {post.by}
        </span>
        <span>
          <PostInfoElement>Posted:</PostInfoElement>
          {convertUnixTime(post.time)}
        </span>
      </PostInfo>
    </PostDescription>
  </BlogPostWrapper>;
});