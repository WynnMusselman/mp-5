import {redirect, notFound} from "next/navigation";
import {URLProps} from "@/type";
import getCollection, {URL_COLLECTION} from "@/db";

// delays navigation until server data resolves
export const instant = false

export default async function AliasPage({ params }: { params: Promise<{ alias: string }> }) {    const {alias} = await params;

    // gets the full collection from mongodb
    const dbCollection = await getCollection(URL_COLLECTION);

    //gets the values field from the id
    const dbValue = await dbCollection.findOne({ _id: alias });

    // if the value is null
    if(!dbValue) {
        notFound();
    }

    //redirects based on the url field from the value
    redirect(dbValue.url);
}