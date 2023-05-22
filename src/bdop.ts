// import { connectDB } from "./db";
// import { MongoClient } from "mongodb";

// export const findUsers = async (res: Response) => {
//   try {
//     const db = await connectDB();
//     const collection = db.collection("Users");
//     const findResult = await collection.find().toArray();
//     res.json(findResult);
//     // return findResult;
//   } catch (error) {
//     throw error;
//   }
// };
