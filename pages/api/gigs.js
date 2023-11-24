import { MongoClient } from "mongodb";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Lolz" });
  } else if (req.method === "POST") {
    console.log(req.body);
    // if (!date || !city) {
    //   res.status(422).json({ message: "Invalid data" });
    //   return;
    //   //add other server-side validation!
    // }
    // const newEvent = {
    //   date,
    //   city,
    //   artist,
    //   venue,
    //   price,
    //   tickets,
    //   instagram,
    //   facebook,
    // };
    res.status(201).json({ message: "Successfully stored event!" });
  }
}
