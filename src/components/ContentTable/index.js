import React from 'react';

import Table from './styles';

function ContentTable({ employees }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td><img src={employee.image} alt={`foto de ${employee.name}`} /></td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{employee.formattedDate}</td>
            <td>{employee.formattedPhone}</td>
          </tr>

        ))}
      </tbody>
    </Table>
  );
}

export default ContentTable;
