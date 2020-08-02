// SERVER
import express, { Application, Request, Response } from "express";
const server: Application = express();

server.use(express.json());

// INDEX ROUTE
server.get("/", (req: Request, res: Response) => {
  res.json({ api: "ONLINE" });
});

export default server;
