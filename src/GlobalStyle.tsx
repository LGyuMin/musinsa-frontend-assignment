import { createGlobalStyle } from 'styled-components';

import MusinsaBoldTtf from './font/musinsa-Bold.ttf';
import MusinsaBoldWoff from './font/musinsa-Bold.woff';
import MusinsaMediumTtf from './font/musinsa-Medium.ttf';
import MusinsaMediumWoff from './font/musinsa-Medium.woff';
import MusinsaLightTtf from './font/musinsa-Light.ttf';
import MusinsaLightWoff from './font/musinsa-Light.woff';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'musinsa';
        src: url(${MusinsaMediumWoff});
        src: url(${MusinsaMediumTtf}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'musinsa';
        src: url(${MusinsaLightWoff});
        src: url(${MusinsaLightTtf}) format('truetype');
        font-weight: 100;
    }

    @font-face {
        font-family: 'musinsa';
        src: url(${MusinsaBoldWoff});
        src: url(${MusinsaBoldTtf}) format('truetype');
        font-weight: 700;
    }

    :root {
        font-family: 'musinsa', sans-serif;
        line-height: 1;
        font-weight: 400;
        font-size: 10px;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 1);
        background-color: #fff;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    @media (max-width: 700px) {
        :root { font-size: 7px; }
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