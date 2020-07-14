import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BlogPost } from './BlogPost';
import { getNewPostIds, getMultiplePosts } from '../services/HackerNewsAPI';
import { GlobalStyle, BlogPostsWrapper } from '../styles/BlogPostsStyles';
import SearchPosts from './SearchPosts';
import { PAGINATION_SIZE } from '../constants/index';

export default function BlogPosts() {
  const [postIds, setPostIds] = useState([]);
  const [availablePosts, setAvailablePosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState([]);

  /** Handles the change to a filter */
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  /**
   * Updates the pagination and increases the number of posts
   */
  const updatePagination = async () => {
    const toFindIds = postIds.splice(availablePosts.length, availablePosts.length + PAGINATION_SIZE);
    const foundPosts = await getMultiplePosts(toFindIds);

    setAvailablePosts(...availablePosts, foundPosts);
  }

  /**
   * Udpates the posts that are displayed on the page
   */
  const updateDisplayedPosts = () => {
    if (filter == null || filter.length === 0) {
      setFilteredPosts(availablePosts);
    } else {
      const displayedPosts = [];
      // Look through all the available posts to see if we have a match
      // and ignore casing when looking for it
      for (let i = 0; i < availablePosts.length; i++) {
        if (availablePosts[i].title.toLowerCase().indexOf(filter) > -1) {
          displayedPosts.push(availablePosts[i])
        }
      }

      setFilteredPosts(displayedPosts);
    }
  }

  const refObserver = useRef()

  const lastPostRef = useCallback(node => {
    if (refObserver.current) refObserver.current.disconnect();
    refObserver.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        updatePagination();
      }
    })
    if (node) refObserver.current.observe(node);
  });

  // If more post Ids get added, update the pagination
  useEffect(() => {
    updatePagination();
  }, [postIds])

  // Update the displayed posts if the available gets updated
  useEffect(() => {
    updateDisplayedPosts();
  }, [availablePosts, filter])

  // Get all the post Ids
  useEffect(() => {
    getNewPostIds().then(res => {
      // We just need to setup the post Ids and keep them locally
      setPostIds(res);
    });
  }, []);

  return <div>
    <GlobalStyle />
    <BlogPostsWrapper>
      <h1>Blog Posts</h1>
      <SearchPosts filter={filter} handleFilter={handleFilter} />
      <ul>
        {filteredPosts.map((post, index) => {
          if (filteredPosts.length === index + 1) {
            // We only want the ref on the last element
            return <section key={post.id} ref={lastPostRef}><BlogPost post={post} /></section>
          } else {
            return <BlogPost key={post.id} post={post} />
          }

        })}
      </ul>
    </BlogPostsWrapper>
  </div>;
}