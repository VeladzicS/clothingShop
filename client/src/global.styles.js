import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
        padding:10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }


`