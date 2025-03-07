import { Request } from "express";
import { FileFilterCallback, memoryStorage } from "multer";

export const WRONG_TYPE_ERROR = "WRONG_TYPE_ERROR";
export const NO_FILE_ERROR = "NO_FILE_ERROR";

export const pdfFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
) => {
  if (file.mimetype !== "application/pdf") {
    callback(new Error(WRONG_TYPE_ERROR));
  } else {
    callback(null, true);
  }
};

export const storage = memoryStorage();
