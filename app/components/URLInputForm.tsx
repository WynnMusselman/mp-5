"use client"

import styled from "styled-components";

const MainStyled = styled.main`
    width: 80%;
`

const TitleStyled = styled.div`
    margin: 3%;
`

const H2Styled = styled.h2`
    font: bold calc(3px + 3vw) "Roboto", monospace;
    color: #5E6472;
    margin: 2%;
`

const PStyled = styled.p`
    font: italic calc(2px + 1.3vw) "Roboto", monospace;
    color: #5E6472;
`

const FormStyled = styled.form`
    border: 2px solid #34403A;
`

export default function URLInputForm(){

    return(
        <MainStyled>


            <TitleStyled>
                <H2Styled>Shorten a URL</H2Styled>
                <PStyled>Enter a long URL and create a shorter version of it with a custom alias</PStyled>
            </TitleStyled>

            <FormStyled>
                {/*enter URL*/}
                <label htmlFor="url">URL:</label>
                <input type="text" id="url"/>

                {/*enter alias for URL*/}
                <label htmlFor="alias">Alias:</label>
                <input type="text" id="alias"/>
            </FormStyled>
        </MainStyled>
    )
}