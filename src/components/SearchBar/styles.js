import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  border:1px solid #CDCDCD;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 10px 12px;

  input {
    border: none;
    font-size: 1rem;
    font-weight: 400;
    background-color: transparent;
    outline: none;

    ::placeholder {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
