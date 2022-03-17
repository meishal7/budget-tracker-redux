import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #a976f7; 
  --div-top-bottom-margin:20px;
  --div-left-right-margin:20px;
  --div-top-bottom-padding:10px;
  --div-left-right-padding:10px;
  --radius: 5px;
  --btn-width: 60%;
  --btn-height: 40px;
  --btn-margin: 10px;
  --btn-padding: 10px;

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
