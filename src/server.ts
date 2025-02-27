import express, { Request, Response } from "express";
import upload from "./Middleware/upload_config";
import { Service } from "./service";
import { PdfRequest } from "./models/pdf_request";

const app = express();
app.use(express.json());
const service = new Service();

app.get("/", (_: Request, res: Response) => {
  res.json({
    version: process.env.npm_package_version,
    service: "pdf-thumbnail",
  });
});

app.post("/pdfs", upload.single("pdf"), async (req: Request, res: Response): Promise<any> => {
  const pdf = req.file;
  if (!pdf) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const uuid = service.savePdfProcessingRequest(pdf.buffer);
  res.json({ id: uuid });
});

export { app };

