import React from 'react';
import { SearchFieldWrapper, SearchField, MatSearchField } from './SearchPostsStyles';
import { TextField } from '@material-ui/core';

export default function SearchPosts({ filter, handleFilter }) {

  return <>
    <SearchFieldWrapper>
      <SearchField placeholder="Filter Posts" value={filter} onChange={handleFilter} />
    </SearchFieldWrapper>
  </>
}