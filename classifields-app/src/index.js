import React from "react"
import { render } from "react-dom"
import Root from "./components/Root"
import { createGlobalStyl,ThemeProvider } from "styled-components"
import * as theme from "./theme"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    html, body , #app {
        height: 100%;
        margin:0;
        padding:0;
        width:100%;
    }
    body{
        font-family: Roboto, sans-serif;
    }
`

render(
    <>
        <GlobalStyle />
        <Root />
    </>,
    document.getElementById("app")
)
