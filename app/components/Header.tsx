import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: #5E6472;
    text-align: center;
    padding: 2%;
`

const H1Styled = styled.h1`
    color: #FAF3DD;
    font: bold calc(5px + 3.5vw) Monospace;
`

const PStyled = styled.p`
    color: #B8F2E6;
    font: italic calc(2px + 1.5vw) Monospace;
`



export default function Header(){
    return(
        <HeaderStyled>
            <H1Styled>URL Shortener</H1Styled>
            <PStyled>Welcome to the CS303 URL Shortener!</PStyled>
        </HeaderStyled>
    );
}