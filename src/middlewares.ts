import express from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "./controllers";

// const router = express.Router();

// export const authenticateToken = (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ error: "Token not provided" });
//   }

//   jwt.verify(token, jwtSecret, (err: any, user: any) => {
//     if (err) {
//       return res.status(403).json({ error: "Invalid token" });
//     }
//     (req as any).user = user;
//     next();
//   });
// };

export const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    (req as any).user = decoded;
    next();
  });
};
