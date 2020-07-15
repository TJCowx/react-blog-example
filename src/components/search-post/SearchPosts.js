import React from 'react';
import { SearchFieldWrapper, SearchField } from './SearchPostsStyles';
import propTypes from 'prop-types';

export default function SearchPosts({ filter, handleFilter }) {

  return <>
    <SearchFieldWrapper>
      <SearchField placeholder="Filter Posts" value={filter} onChange={handleFilter} />
    </SearchFieldWrapper>
  </>
}

SearchPosts.propTypes = {
  filter: propTypes.string.isRequired,
  handleFilter: propTypes.func.isRequired,
}