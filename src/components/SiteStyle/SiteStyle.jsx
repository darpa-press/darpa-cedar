import { createGlobalStyle } from "styled-components"

import getCurrentColour from "../../helpers/getCurrentColour"
import registerWoff from "./1890_registers_script_n-webfont.woff"
import registerWoff2 from "./1890_registers_script_n-webfont.woff2"
import routedWoff from "./routed-gothic-webfont.woff"
import routedWoff2 from "./routed-gothic-webfont.woff2"

const SiteStyle = createGlobalStyle`

    :root {
        --main-sans-font: "routed", "neue-haas-unica";
        --main-serif-font: "williams-caslon-text";
        --main-content-width: 35rem;
        --main-colour: ${getCurrentColour()}
    }

    @font-face {
        font-family: '1890';
        src: url(${registerWoff2}) format('woff2'),
            url(${registerWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
    font-family: 'routed';
    src: url(${routedWoff2}) format('woff2'),
         url(${routedWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

    html {
        color: var(--main-colour, #444);
        font-family: var(--main-sans-font);
        font-size: 100%;
        line-height: 1.35;
        @media screen and (min-width: 1024px) {
            font-size: 130%;
        }
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box !important;
    }
    
    a {
        text-decoration: none;
    }
`
export default SiteStyle
