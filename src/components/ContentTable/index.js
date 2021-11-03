import React from 'react';

import Table from './styles';

function ContentTable() {
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
        <tr>
          <td><img src="/img" alt="img" /></td>
          <td>Juliana Almeida</td>
          <td>Designer</td>
          <td>15/12/2019</td>
          <td>+55 (12) 99999-9999</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ContentTable;
