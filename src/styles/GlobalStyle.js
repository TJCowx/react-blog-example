import { createGlobalStyle } from 'styled-components';

/** Reset any styling baked in */
export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    
    *, *:before, *:after {
      -webkit-box-sizing: inherit;
              box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      line-height: 1;
      color: #202020;
      background-color: #fafafe;
      font-family: "SofiaProWeb", Helvetica, Arial, sans-serif;
      font-size: 16px;
    }

    ul {
      margin: 0;
      padding: 0;
    }
  }
`;