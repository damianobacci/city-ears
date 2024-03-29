import { connectToDatabase, getGigs, insertGig } from "@/lib/mongo/db";

export default async function handler(req, res) {
  const db = await connectToDatabase();

  if (req.method === "GET") {
    const gigs = await getGigs(db);
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
    await insertGig(db, newEvent);
    res.status(201).json({ message: "Successfully stored event!" });
  }

  db.client.close();
}
