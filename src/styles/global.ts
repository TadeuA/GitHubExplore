import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: ${({theme})=> theme.fonts['sans-serif']};
    color: ${({theme})=> theme.colors['dark-text']};
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`