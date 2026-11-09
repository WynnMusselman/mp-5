"use client"

export default function URLInputForm(){

    return(
        <>
            <h2>Shorten a URL</h2>
            <p>Enter a long URL and create a shorter version of it with a custom alias</p>
            <form>
                <label htmlFor="url">URL:</label>
                <input type="text" id="url"/>
            </form>
        </>
    )
}