import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f0;
    color: #1c1c1c;
    font-family: 'Roboto', sans-serif;
  }
`;
