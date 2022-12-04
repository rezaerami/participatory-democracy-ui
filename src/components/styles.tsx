import { css, createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import 'resources/css/opensans.css';

const additional = css`
  :root {
    --white: #ffffff;
    --black: #000000;
    --blue: #1da1f2;
    --nuke: #ffff00;
    --green: #009a3a;
    --red: #c41932;
  }
  html {
    direction: ${(props) => props.theme.direction};
    font-size: 62.5%;
    font-family: ${(props) => props.theme.defaultFont};
    overflow-y: auto;
    overflow-x: hidden;
    * {
      font-family: inherit;
      outline: none;
      text-decoration: none;
    }
  }
  a {
    color: inherit;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes signal {
    0% {
      opacity: 1;
      transform: scale(0.3);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes fill {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(-2%);
    }
    100% {
      transform: translateX(2%);
    }
  }
`;

/* eslint-disable prettier/prettier */

const GlobalStyles = createGlobalStyle`
  ${additional}
`;

export default GlobalStyles;
