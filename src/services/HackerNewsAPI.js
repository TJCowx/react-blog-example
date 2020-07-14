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
  getImageUrl(postRes.data.url).then((res) => {
    postRes.data.imgUrl = res;
  })

  return postRes.data;
}

/**
 * Tries to get an image URL from a post
 * @param {*} postUrl The post URL to try and get an image from
 */
export const getImageUrl = async (postUrl) => {
  const DEFAULT_IMAGE = 'https://via.placeholder.com/150?Text=NotFound';
  return DEFAULT_IMAGE;
  if (postUrl != null && postUrl.length > 0) {
    try {
      const imageMetadata = await grabity.grabIt(postUrl);
      if (imageMetadata != null && imageMetadata.image != null) {
        return imageMetadata.image;
      } else {
        return DEFAULT_IMAGE;
      }
    } catch (e) {
      console.warn('HELLO WORLD')
      return DEFAULT_IMAGE;
    }
  } else {
    return DEFAULT_IMAGE
  }
}