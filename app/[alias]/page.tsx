import {redirect} from "next/navigation";
import {URLProps} from "@/type";
import getCollection, {URL_COLLECTION} from "@/db";

export default async function destinationURL({ params }: URLProps): Promise<string> {
    const {alias} = await params;

    // gets the full collection from mongodb
    const dbCollection = await getCollection(URL_COLLECTION);

    //gets the values field from the id
    const dbValue = await dbCollection.findOne({ _id: alias });

    //redirects based on the url field from the value
    redirect(dbValue.url);
}