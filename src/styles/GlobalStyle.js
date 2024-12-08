// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4CAF50;  // Green for headings and emphasis
    --secondary-color: #FF5722; // Orange for highlights
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
