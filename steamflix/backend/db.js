import { MongoClient } from "mongodb";
import { mongoURI } from "./MongoUri.js";
let dbConnection;
const dbName = "steamflix";

export function connectToDb(cb) {
  MongoClient.connect(mongoURI)
    .then((client) => {
      dbConnection = client.db(dbName);
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
}
export function getDb() {
  return dbConnection;
}
