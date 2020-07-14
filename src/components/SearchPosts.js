import React from 'react';
import { SearchFieldWrapper } from '../styles/SearchPostsStyles';

export default function SearchPosts() {

  return <>
    <SearchFieldWrapper>
      <input type="text" placeholder="Filter"></input>
    </SearchFieldWrapper>
  </>
}