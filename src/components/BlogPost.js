/**
 * BlogPost.js
 * Handles the displaying of an individual blog post
 */

import React, { useEffect, useState } from 'react';
import { getPost } from '../services/HackerNewsAPI';

export default function BlogPost({ postId }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Get the information required for this post
    getPost(postId).then(res => setPost(res));
  })


  return <div>
    <img src={post.imgUrl}></img>
    <h3>{post.title}</h3>
    <h5>By: {post.by}</h5>
    <a href={post.url}>See Article</a>
  </div>;
}