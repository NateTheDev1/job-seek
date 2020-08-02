// SERVER
import express, { Application, Request, Response, NextFunction } from "express";
const server: Application = express();
const jwt = require("jsonwebtoken");

// const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
//   const secret = process.env.JWT_SECRET;

//   const token = req.headers.authorization;
//   console.log();
//   if (!token) {
//     return res.status(400).json({ error: "ACCESS DENIED" });
//   } else {
//     const secret = process.env.JWT_SECRET;
//     const decoded = await jwt.verify(token, secret);
//     if (!decoded) {
//       return res.status(400).json({ error: "Could not verify token" });
//     } else {
//       next();
//     }
//   }
// };

server.use(express.json());
// server.use(verifyToken);

// INDEX ROUTE
server.get("/", (req: Request, res: Response) => {
  res.json({ api: "ONLINE" });
});

export default server;
