import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'musinsa', sans-serif;
        line-height: 1;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 1);
        background-color: #fff;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;