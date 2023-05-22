import express from "express";
import { getUsers, createUser, loginUser } from "./controllers";
import { verifyToken } from "./middlewares";
// import { authenticateToken } from "./middlewares";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
