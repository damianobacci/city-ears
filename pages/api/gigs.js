import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Lolz" });
  } else if (req.method === "POST") {
    const newEvent = req.body;
    console.log(newEvent);
    // if (!date || !city) {
    //   res.status(422).json({ message: "Invalid data" });
    //   return;
    //   //add other server-side validation!
    // }

    MongoClient.connect(URI).then((client) => {
      const db = client.db();
      db.collection("gigslist").insertOne(newEvent);
    });
    res.status(201).json({ message: "Successfully stored event!" });
  }
}
