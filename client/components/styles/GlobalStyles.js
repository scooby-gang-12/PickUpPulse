import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Rough Battle';
        src: url('/fonts/Rough Battle.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cabin Regular';
        src: url('/fonts/Cabin-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    :root{
        --primary-font: 'Rough Battle';
        --secondary-font: 'Cabin Regular';
    }
`