"use server"

import {URLProps} from "@/type";
import getCollection, {URL_COLLECTION} from "@/db";

export default async function createNewAlias(alias: string, url: string): Promise<URLProps> {
    console.log("Creating new alias...");
    const formInput = {_id: alias, url: url}
    const urlCollection = await getCollection(URL_COLLECTION);

    try{
        await urlCollection.insertOne({...formInput});
    }
    catch(err){
        //11000 = duplicate id
        if(err.code === 11000){
            return {error: "Alias already in use. Please enter a unique alias"}
        }
        throw err;
    }

    // const res = await urlCollection.insertOne({...formInput});
    //
    // if(!res.acknowledged) {
    //     throw new Error("DB insert failed");
    // }

    return {formInput};
}
