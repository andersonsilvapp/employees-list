import React, { useEffect, useState } from 'react';
import { formatDate, formatPhone } from '../../utils/formatData';

import ContentTable from '../ContentTable';
import SearchBar from '../SearchBar';

import Container from './styles';

function Layout() {
  const [employees, setEmployess] = useState([]);
  const [search, setSearch] = useState('');

  const hadleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  useEffect(() => {
    if (search) {
      fetch(`http://localhost:5000/employees?q=${search}`)
        .then((response) => response.json())
        .then((data) => setEmployess(data));
    } else {
      fetch('http://localhost:5000/employees')
        .then((response) => response.json())
        .then((data) => setEmployess(data));
    }
  }, [search]);

  const formattedData = employees.map((employee) => ({
    ...employee,
    formattedDate: formatDate(employee.admission_date),
    formattedPhone: formatPhone(employee.phone),
  }));

  return (
    <Container>
      <div>
        <h1>Funcionários</h1>
        <SearchBar onSearch={hadleSearch} />
      </div>

      <ContentTable employees={formattedData} />
    </Container>
  );
}

export default Layout;
