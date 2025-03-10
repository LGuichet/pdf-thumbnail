import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
import {
  getAllCompletedGenerationJob,
  savePdfProcessingRequest,
} from "../service";
import { errorHandler } from "./Middleware/error_handler";
import { NO_FILE_ERROR, pdfFilter, storage } from "./Middleware/upload_config";
import { appInfo, completedJobsWithLinks, pdfRequestId } from "./views";

const app = express();
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.json(appInfo());
});

app.get("/pdfs-thumbnails", async (_: Request, res: Response) => {
  const result = await getAllCompletedGenerationJob();
  res.json(completedJobsWithLinks(result));
});

app.get("/pdfs/:id", (req, res) =>
  res.download("./file_storage/" + req.params.id + ".pdf")
);

app.get("/pdfs/:id/thumbnail", (req, res) =>
  res.download("./file_storage/" + req.params.id + ".png")
);


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
