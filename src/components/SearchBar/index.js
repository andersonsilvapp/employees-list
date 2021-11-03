import React from 'react';

import Container from './styles';
import SearchIcon from '../../assets/search.svg';

function SearchBar({ onSearch }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon />
    </Container>
  );
}

export default SearchBar;
