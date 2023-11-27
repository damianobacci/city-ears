import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Lolz" });
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
    MongoClient.connect(URI).then((client) => {
      const db = client.db();
      db.collection("gigslist").insertOne(newEvent);
    });
    res.status(201).json({ message: "Successfully stored event!" });
  }
}
