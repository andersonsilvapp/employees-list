import React from 'react';

import Container from './styles';
import SearchIcon from '../../assets/search.svg';

function SearchBar() {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar"
      />
      <SearchIcon />
    </Container>
  );
}

export default SearchBar;
