import { useState, useEffect } from 'react';
import { PAGINATION_SIZE } from '../constants';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(PAGINATION_SIZE);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      loading) {
      return false;
    }

    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    setCount(count + PAGINATION_SIZE);

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    // Call handle scroll when the event happens
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return { count };
}