import { connectToDatabase, insertContact } from "@/lib/mongo/db";

export default async function handler(req, res) {
  const db = await connectToDatabase();

  if (req.method === "GET") {
    res.status(405).json({ message: "This method is not allowed." });
  } else if (req.method === "POST") {
    const { name, email } = req.body;

    if (!name || !email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    const newContact = {
      name,
      email,
    };
    await insertContact(db, newContact);
    res.status(201).json({ message: "Successfully stored contact!" });
  }

  db.client.close();
}
