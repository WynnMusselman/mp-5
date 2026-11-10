"use client"

import styled from "styled-components";

const MainStyled = styled.main`
    width: 80%;
`

export default function URLInputForm(){

    return(
        <MainStyled>
            <h2>Shorten a URL</h2>
            <p>Enter a long URL and create a shorter version of it with a custom alias</p>
            <form>
                {/*enter URL*/}
                <label htmlFor="url">URL:</label>
                <input type="text" id="url"/>

                {/*enter alias for URL*/}
                <label htmlFor="alias">Alias:</label>
                <input type="text" id="alias"/>
            </form>
        </MainStyled>
    )
}