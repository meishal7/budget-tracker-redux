import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #a976f7; 
}
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
#modal-root {
  position: relative;
}

`;
