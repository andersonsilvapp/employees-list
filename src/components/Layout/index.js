import React, { useEffect, useState } from 'react';

import ContentTable from '../ContentTable';
import SearchBar from '../SearchBar';

import Container from './styles';

function Layout() {
  const [employees, setEmployess] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then((response) => response.json())
      .then((data) => setEmployess(data));
  }, []);

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
