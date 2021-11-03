import styled from 'styled-components';

export default styled.main`
  width: 960px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
