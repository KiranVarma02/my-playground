import mongoClient from "./mongoClient";
import { Collection, Document } from "mongodb";

export function tasksCollection(): Collection<Document> {
    const dbName = "todo";
    const collectionName = "tasks";

    // const database = mongoClient.db(dbName);
    // return database.collection<Document>(collectionName);
}