"use client"

import styled from "styled-components";
import {useState} from "react";
import createNewAlias from "@/lib/createNewAlias";

const MainStyled = styled.main`
    width: 80%;
    margin: auto 3%;
    text-align: center;
`

const TitleStyled = styled.div`
    margin: 3%;
`

const H2Styled = styled.h2`
    font: bold calc(3px + 3vw) "Roboto", monospace;
    color: #34403A;
    margin: 2%;
`

const PStyled = styled.p`
    font: italic calc(2px + 1.3vw) "Roboto", monospace;
    color: #5E6472;
`

const FormStyled = styled.form`
    border: 2px solid #34403A;
    border-radius: 15px;
    background-color: #B8F2E6;
    padding: 2%;
    display: flex;
    flex-direction: column;
    text-align: left;
    
    box-shadow: 0 5px rgb(0, 0, 0, 30%);
`

const LabelStyled = styled.label`
    font: bold calc(3px + 2vw) monospace;
    color: #34403A;
    margin: 0 1%;
`

const InputStyled = styled.input`
    font: calc(2px + 1.4vw) monospace;
    padding: 0.5% 2%;
    margin: 1%;
    
    border: 1px solid #AED9E0;
    border-radius: 5px;
`

export default function URLInputForm({append, }: {append: (url: URLProps) => void;}){
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");

    return(
        <MainStyled>

            {/*header for url*/}
            <TitleStyled>
                <H2Styled>Shorten a URL</H2Styled>
                <PStyled>Enter a long URL and create a shorter version of it with a custom alias</PStyled>
            </TitleStyled>

            <FormStyled onSubmit = {async (event) => {
                event.preventDefault();
                await createNewAlias(alias, url);
            }}>

                {/*enter URL*/}
                <LabelStyled htmlFor="url">URL:</LabelStyled>
                <InputStyled type="text" id="url" value = {url} onChange={event => setUrl(event.target.value)}/>

                {/*enter alias for URL*/}
                <LabelStyled htmlFor="alias">Alias:</LabelStyled>
                <InputStyled type="text" id="alias" value = {alias} onChange={event => setAlias(event.target.value)}/>

                <button type = "submit">Create Alias</button>
            </FormStyled>
        </MainStyled>
    )
}