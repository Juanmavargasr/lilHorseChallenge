import { Request, Response } from "express";
import { User } from "./models";
import { connectDB } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const jwtSecret = "secretjwt";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const collection = db.collection("Users");
    const findResult = await collection.find().toArray();
    res.json(findResult);
    const users = [] as User[];
    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Error getting users" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { UserID, Username, Password } = req.body;
    if (!UserID || !Username || !Password) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    const db = await connectDB();
    const collection = db.collection("Users");

    const existingUser = await collection.findOne({ Username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const insertResult = await collection.insertOne({
      UserID,
      Username,
      Password: hashedPassword,
    });
    res.json({
      _id: insertResult.insertedId,
      UserID,
      Username,
      Password,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { Username, Password } = req.body;
    const db = await connectDB();
    const collection = db.collection("Users");
    const user = await collection.findOne({ Username });
    if (!user || !(await bcrypt.compare(Password, user.Password))) {
      return res.status(401).json({ error: "Invalid login details" });
    }

    const token = jwt.sign(
      { UserID: user.UserID, Username: user.Username },
      jwtSecret,
      { expiresIn: "1h" }
    );
    res.json({ user, token });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Login failed" });
  }
};
