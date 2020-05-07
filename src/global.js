import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: "Roboto";
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    ul {
        padding: 1em 0em 0em 2em;
    }
    input {
        height: 25px;
        font-size: 1.25em;
        padding: .1em 0 .2em .5em;
        margin: 0;
        max-width: 300px;
    }
    body {
        font-family: ${({ theme }) => theme.primaryFont};
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryTextColor};

        text-rendering: optimizeLegibility;
    }
    h1, h2, h3, h4, h5, p, input {
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 100%; */
        /* font: inherit; */
        vertical-align: baseline;
    }
    h1 {
        font-size: 28px;
        font-weight: 400;
    }
    h2 {
        font-size: 24px;
        font-weight: 400;
    }
    h3 {
        font-size: 18px;
        font-weight: 400;
    }
    h4 {
        
    }
    p {
        color: #404040;
        font-size: 17px;
        font-weight: 300;
    }
    .App {
    }
`

export const StyledApp = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  color:black;
`
export const ScreenSize = styled.div`
    margin: 1em auto;
    border: 1px solid silver;
    width: 1190px;
    height: 700px;
`