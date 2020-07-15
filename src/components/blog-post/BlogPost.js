/**
 * BlogPost.js
 * Handles the displaying of an individual blog post
 */

import React, { memo, useState, useEffect } from 'react';
import { BlogPostWrapper, PostTitle, PostInfo, PostInfoElement, PostImage, PostDescription, PostUrl } from './BlogPostStyles';
import { convertUnixTime } from '../../utils/convertUnixTime';
import { PLACEHOLDER_IMAGE } from '../../constants/index';
import { getImageUrl } from '../../services/HackerNewsAPI';

export const BlogPost = memo(function BlogPost({ post, theme }) {
  const [imageUrl, setImageUrl] = useState(PLACEHOLDER_IMAGE);

  useEffect(() => {
    getImageUrl(post.url).then(imgUrl => {
      if (imgUrl == null || imgUrl.length === 0) {
        setImageUrl(PLACEHOLDER_IMAGE);
      } else {
        setImageUrl(imgUrl);
      }
    })
    return () => { }
  }, [])

  return <BlogPostWrapper theme={theme}>
    <PostImage>
      <img src={imageUrl} alt="Not Found"></img>
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
      <PostUrl>
        <span>
          <a href={post.url}>READ THIS ARTICLE</a>
        </span>
      </PostUrl>
    </PostDescription>
  </BlogPostWrapper>;
});