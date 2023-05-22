import { Request, Response } from "express";
import { User } from "./models";
// import { InsertOneResult } from "mongodb";
import { connectDB } from "./db";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const collection = db.collection("Users");
    const findResult = await collection.find().toArray();
    res.json(findResult);
    const users = [] as User[];
    res.json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { UserID, Username, Password } = req.body;
    if (!UserID || !Username || !Password) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const db = await connectDB();
    const collection = db.collection("Users");
    const insertResult = await collection.insertOne({
      UserID,
      Username,
      Password,
    });
    res.json({
      _id: insertResult.insertedId,
      UserID,
      Username,
      Password,
    });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { UserID, Username, password } = req.body;

//     if (!UserID || !Username || !password) {
//       return res.status(400).json({ error: "Faltan datos obligatorios" });
//     }

//     const db = await connectDB();
//     const collection = db.collection("Users");

//     // Crear un nuevo registro
//     const result: InsertOneResult<any> = await collection.insertOne({
//       UserID,
//       Username,
//       password,
//     });

//     // Devolver el resultado con el ID asignado
//     res.json({
//       _id: result.insertedId,
//       UserID,
//       Username,
//       password,
//     });
//   } catch (error) {
//     console.error("Error al crear el usuario:", error);
//     res.status(500).json({ error: "Error al crear el usuario" });
//   }
// };
