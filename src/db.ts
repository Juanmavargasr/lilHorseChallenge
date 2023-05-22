import { MongoClient } from "mongodb";
require("dotenv").config();
const url = process.env.MONGO_URI;
const client = new MongoClient("mongodb://127.0.0.1:27017");
const dbName = "lilHorse";

export const connectDB = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db;
};
