import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
import { errorHandler } from "./Middleware/error_handler";
import { NO_FILE_ERROR, pdfFilter, storage } from "./Middleware/upload_config";
import { savePdfProcessingRequest } from "../service";
import { appInfo, pdfRequestId } from "./views";

const app = express();
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.json(appInfo());
});

app.post(
  "/pdfs",
  multer({ fileFilter: pdfFilter, storage: storage }).single("pdf"),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const pdf = req.file;
    if (!pdf) {
      return next(new Error(NO_FILE_ERROR));
    }
    const request = await savePdfProcessingRequest(pdf.buffer);
    res.json(pdfRequestId(request));
  }
);

app.use(errorHandler);
export { app };
