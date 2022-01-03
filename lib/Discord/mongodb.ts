import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client;
let clientPromise: any

if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

client = new MongoClient(uri!);
clientPromise = client.connect() as any

export default clientPromise