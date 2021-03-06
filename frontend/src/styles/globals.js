import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
// :root {
//   --color-main: #1693DB;
//   --color-text: #383a3f;
//   --color-dark: #1f2124;
//   --color-gray: #677;
//   --color-bg: #f3f6f9;
//   --color-light: #acb4bd;
//   --color-lighter: #f9f9f9;
//   --color-white: #fff;
//   --color-border:#e0e3e6;
// }
//
// .dark {
//   --color-main: #1693DB;
//   --color-text: #d6d1d1;
//   --color-dark: #f5f6f7;
//   --color-gray: #999;
//   --color-bg: #1f2124;
//   --color-lighter: #292a2c;
//   --color-white: #2e3235;
//   --color-border:#252629;
// }

/* BASE STYLES */


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;
  color: inherit;
  font-size: inherit;
  scroll-behavior: smooth;
}


body{
  line-height: 1.8em;
  font-weight: 400;
  font-size: 16px;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;