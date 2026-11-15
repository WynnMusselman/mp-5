"use server"

import getCollection, {URL_COLLECTION} from "@/db";
import {MongoServerError} from "mongodb";

export default async function createNewAlias(alias: string, url: string) {
    console.log("Creating new alias...");
    const formInput = {_id: alias, url: url}
    const urlCollection = await getCollection(URL_COLLECTION);

    try{
        await urlCollection.insertOne({...formInput});
    }
    catch(error: unknown){
        //11000 = duplicate id
        //https://www.mongodb.com/docs/manual/reference/error-codes/
        if(error instanceof MongoServerError && error.code === 11000){
            return {error: "Alias already in use. Please enter a unique alias"}
        }
        throw error;
    }

    // if the url doesnt include https, then it's invalid
    if(!formInput.url.includes("https://") || !formInput.url.includes("http://")){
        return {error: "URL must contain https://"}
    }

    //if the url contains invalid characters
    const invalid_chars = " <>{}[]|^`\\";
    //https://www.reddit.com/r/learnjavascript/comments/oeegjn/is_there_a_way_to_determine_a_string_of/?captcha=1
    if([...invalid_chars].some((char) => formInput.url.includes(char))){
        return {error: "URL cannot contain valid characters"}
    }

    //if there are no errors, the url can be created
    await urlCollection.insertOne({...formInput});
    return {formInput};



}
