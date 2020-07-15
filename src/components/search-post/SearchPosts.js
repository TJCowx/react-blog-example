import React from 'react';
import { SearchFieldWrapper } from './SearchPostsStyles';
import TextField from '@material-ui/core/TextField';

export default function SearchPosts({ filter, handleFilter }) {

  return <>
    <SearchFieldWrapper>
      <TextField label="Filter Posts" value={filter} onChange={handleFilter} />
    </SearchFieldWrapper>
  </>
}