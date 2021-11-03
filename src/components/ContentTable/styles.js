import styled from 'styled-components';

export default styled.table`
  width: 100%;
  border-spacing: 0px 1px;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  thead {
    background-color: #5984C0;
    height: 50px;
    text-transform: uppercase;

    th {
      font-weight: 500;
      color: #fff;
      width: 50px;
    }
  }

  tbody {
    text-align: center;

    tr {
      background-color: #fff;
      font-size: 1rem;
      border-spacing: 1px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

      td {
        padding: 8px 0;

        img {
          width: 34px;
          height: 34px;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
`;
