import { NextFunction, Request, Response } from "express";
import { NO_FILE_ERROR, WRONG_TYPE_ERROR } from "./upload_config";

export const errorHandler = (
  err: Error,
  _r: Request,
  res: Response,
  next: NextFunction
) => {
  const errorInfo = errorInfoFromMessage(err.message);
  res.status(errorInfo.status).json({ error: errorInfo.message });
  next(err);
};

function errorInfoFromMessage(type: string) {
  switch (type) {
    case WRONG_TYPE_ERROR:
      return {
        status: 422,
        message: "Invalid file type : only PDFs are allowed.",
      };
    case NO_FILE_ERROR:
      return {
        status: 422,
        message: "No file provided : requests must have a file named 'pdf'",
      };
    default:
      return {
        status: 500,
        message: "Internal error exception",
      };
  }
}
