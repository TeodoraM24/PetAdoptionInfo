import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4CAF50;  
    --secondary-color: #FF5722; 
    --background-color: #f9f9f9;
    --text-color: #555;
    --font-family: Arial, sans-serif;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
  }
`;

export default GlobalStyle;
