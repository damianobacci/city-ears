import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
  const client = await MongoClient.connect(URI);
  return client.db();
}

export async function getGigs(db) {
  return await db.collection("gigslist").find().sort({ _id: -1 }).toArray();
}

export async function insertGig(db, newEvent) {
  await db.collection("gigslist").insertOne(newEvent);
}

export async function insertContact(db, contact) {
  await db.collection("contacts").insertOne(contact);
}
