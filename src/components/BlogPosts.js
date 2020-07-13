import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import { getNewPostIds, getImageUrl } from '../services/HackerNewsAPI';

export default function BlogPosts() {
  const [postIds, setPostIds] = useState([]);
  const [viewablePostIds, setViewablePostIds] = useState([]);

  const PAGINATION_SIZE = 5;


  useEffect(() => {
    getNewPostIds().then(res => {
      // Set all the story IDs that we have retrieved.
      setPostIds(res)

      // Get the first 30 story ids and query for them.
      setViewablePostIds(res.slice(0, PAGINATION_SIZE));
    });
  }, []);

  return <div>
    <h1>BLOG</h1>
    <ul>
      {viewablePostIds.map(postId => {
        return <BlogPost key={postId} postId={postId} />
      })}
    </ul>
  </div>;
}