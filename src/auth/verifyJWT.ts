const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

module.exports = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(400).json({ error: "ACCESS DENIED" });
  } else {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);

    if (decoded) {
      next();
    } else {
      res.status(400).json({ error: "Could not verify token" });
    }
  }
};
