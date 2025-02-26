
import express, { Request, Response } from "express";

const app = express();

app.get('/', (_: Request, res: Response) => {
  res.json({ version: process.env.npm_package_version, service: "pdf-thumbnail" })
});

module.exports = app;