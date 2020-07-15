import React from 'react';
import { SearchFieldWrapper, SearchField } from './SearchPostsStyles';

export default function SearchPosts({ filter, handleFilter }) {

  return <>
    <SearchFieldWrapper>
      <SearchField placeholder="Filter Posts" value={filter} onChange={handleFilter} />
    </SearchFieldWrapper>
  </>
}