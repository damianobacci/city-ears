export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Lolz" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "You posted some data!" });
  }
}
