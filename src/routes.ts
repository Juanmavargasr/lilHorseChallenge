import express from "express";
import { getUsers, createUser } from "./controllers";

const router = express.Router();

router.get("/users", getUsers);

router.post("/register", createUser);

export default router;
