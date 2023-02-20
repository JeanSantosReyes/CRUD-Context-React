import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    body {
        background: ${({ theme }) => theme.background};
    }
`;

export const Container = styled.div.attrs({ className: "container" })`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;