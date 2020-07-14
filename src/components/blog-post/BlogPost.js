/**
 * BlogPost.js
 * Handles the displaying of an individual blog post
 */

import React, { memo } from 'react';
import { BlogPostWrapper, PostTitle, PostInfo, PostInfoElement, PostImage, PostDescription, PostUrl } from '../../styles/BlogPostStyles';
import { convertUnixTime } from '../../utils/convertUnixTime';
import { PLACEHOLDER_IMAGE } from '../../constants/index';

export const BlogPost = memo(function BlogPost({ post }) {

  let image;
  // If there is an image, set it to that, otherwise set the image to a placeholder
  if (post.imgUrl != null) {
    image = <img src={post.imgUrl} alt={post.title}></img>
  } else {
    image = <img src={PLACEHOLDER_IMAGE} alt="Not Found"></img>
  }

  return <BlogPostWrapper>
    <PostImage>
      {image}
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