import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }
    
    body{
        background-color: #AED9E0;
    }
    
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}