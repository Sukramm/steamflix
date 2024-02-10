import express from "express";
import { connectToDb, getDb } from "./db.js";

const app = express();
const port = 5173;

//db connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
    db = getDb();
  }
});

//routes
app.get("/movies", (req, res) => {
  let movies = [];
  db.collection("movies")
    .find()
    .forEach((movie) => movies.push(movie))
    .then(() => {
      res.status(200).json(movies);
      console.log("movies");
    })
    .catch(() => {
      res.status(500).json({ error: "could not fetch" });
    });
});
