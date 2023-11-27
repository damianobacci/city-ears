import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(URI);
    const db = client.db();
    const gigs = await db
      .collection("gigslist")
      .find()
      .sort({
        _id: -1,
      })
      .toArray();
    res.status(200).json({ data: gigs });
  } else if (req.method === "POST") {
    const { date, venue, artist, price, city, tickets, instagram, facebook } =
      req.body;
    if (
      !date ||
      !venue ||
      !artist ||
      !price ||
      !city ||
      !tickets ||
      !instagram ||
      !facebook ||
      !tickets.includes("http") ||
      !facebook.includes("http") ||
      !instagram.includes("http")
    ) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }
    const newEvent = {
      date,
      venue,
      artist,
      price,
      city,
      tickets,
      instagram,
      facebook,
    };
    const client = await MongoClient.connect(URI);
    const db = client.db();
    await db.collection("gigslist").insertOne(newEvent);
    client.close();
    res.status(201).json({ message: "Successfully stored event!" });
  }
}
