// SERVER
import express from "express";
const server: express.Application = express();

server.use(express.json());

// INDEX ROUTE
server.get("/", (req, res) => {
  res.json({ api: "ONLINE" });
});

export default server;
