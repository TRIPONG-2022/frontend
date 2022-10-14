import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  html,
  body,
  #__next {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    display: block;
    fill: currentColor;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
`;

export default GlobalStyle;
