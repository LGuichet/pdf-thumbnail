import { Request } from "express";
import multer, { FileFilterCallback, memoryStorage } from "multer";

const pdfFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  if (file.mimetype === "application/pdf") {
    callback(null, true);
  } else {
    callback(new Error("Uploaded file should be a PDF"));
  }
};

const upload = multer({ storage: memoryStorage(), fileFilter: pdfFilter });

export default upload;
