import styled from "styled-components";

const MainStyled = styled.main`
    width: 70%;
    margin: auto;
    text-align: center;
`
const H2Styled = styled.h2`
    font: bold italic calc(3px + 3vw) "Roboto", monospace;
    color: #5E6472;
    margin: 4%;
`
const PStyled = styled.p`
    font: calc(2px + 1.5vw) "Roboto", monospace;
    margin: 2% 0;
    color: #34403A;
`

export default function about(){
    return(
        <MainStyled>
            <H2Styled>Welcome to the URL shortener</H2Styled>

            <PStyled>This is a URL shortener created for CS303</PStyled>
            <PStyled>
                To get started, enter a url into the input form on the previous page.
                Then, enter a unique alias. Mongodb will store the url and alias so that
                you can then use your new url!
            </PStyled>

        </MainStyled>
    )
}