import axios from 'axios';
import grabity from 'grabity';

// Setup of the URLs for the hacker news API
export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newPostUrl = `${baseUrl}newstories.json`;
export const postUrl = `${baseUrl}item/`;

/** Gets all the new stories from the hacker news API */
export const getNewPostIds = async () => {
  const res = await axios.get(newPostUrl)
  return res.data;
}

/** Gets an individual story from the hacker news API */
export const getPost = async (postId) => {
  const postRes = await axios.get(`${postUrl}${postId}.json`);

  if (postRes == null || postRes.data == null) {
    return null;
  }

  getImageUrl(postRes.data.url).then((res) => {
    postRes.data.imgUrl = res;
  })

  return postRes.data;
}

/**
 * Not the most efficient as the hacker news API
 * lacks the ability to get a list of posts, so we need all the available
 * posts searched up one at a time.
 */
export const getMultiplePosts = async (postIds) => {
  if (postIds == null || postIds.length === 0) return [];
  const foundPosts = [];

  for (let i = 0; i < postIds.length; i++) {
    const foundPost = await getPost(postIds[i]);
    if (foundPost != null) {
      foundPosts.push(foundPost);
    }
  }

  return foundPosts;
}

/**
 * Tries to get an image URL from a post
 * @param {*} postUrl The post URL to try and get an image from
 */
export const getImageUrl = async (postUrl) => {
  if (postUrl != null && postUrl.length > 0) {
    try {
      const imageMetadata = await grabity.grabIt(postUrl);
      if (imageMetadata != null && imageMetadata.image != null && imageMetadata.image.length > 0) {
        return imageMetadata.image;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  } else {
    return null
  }
}