"use server"

import {URLProps} from "@/type";
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


    return {formInput};
}
