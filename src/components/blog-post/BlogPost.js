import React, { memo, useState, useEffect } from 'react';
import { BlogPostWrapper, PostTitle, PostInfo, PostInfoElement, PostImage, PostDescription, PostUrl } from './BlogPostStyles';
import { convertUnixTime } from '../../utils/convertUnixTime';
import { PLACEHOLDER_IMAGE } from '../../constants/index';
import { getImageUrl } from '../../services/HackerNewsAPI';
import propTypes from 'prop-types';

export const BlogPost = memo(function BlogPost({ post, theme }) {
  const [imageUrl, setImageUrl] = useState(PLACEHOLDER_IMAGE);

  /**
   * An effect that gets the image URL for this blog post.
   * If there is an error or none is found, use the default placeholder image
   */
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
          <PostInfoElement theme={theme}>By:</PostInfoElement> {post.by}
        </span>
        <span>
          <PostInfoElement theme={theme}>Posted:</PostInfoElement>
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

BlogPost.propTypes = {
  theme: propTypes.string.isRequired,
  post: propTypes.object.isRequired,
}