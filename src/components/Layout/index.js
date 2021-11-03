import React from 'react';

import ContentTable from '../ContentTable';
import SearchBar from '../SearchBar';

import Container from './styles';

function Layout() {
  return (
    <Container>
      <div>
        <h1>Funcionários</h1>
        <SearchBar />
      </div>
      <ContentTable />
    </Container>
  );
}

export default Layout;
