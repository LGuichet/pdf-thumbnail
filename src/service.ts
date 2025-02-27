import { Sequelize } from "sequelize";
import { CompletedGenerationJob } from "./models/completed_generation_job";
import { PdfRequest } from "./models/pdf_request";
import { PdfStorage } from "./pdf_storage";
import { ThumbnailGenerator } from "./thumbnail_generator";

const sequelize = new Sequelize(
  "mysql://postgres:postgres@localhost:5432/pdf-thumbnail"
);
const pdfStorage = new PdfStorage();
const thumbnailGenerator = new ThumbnailGenerator();

export class Service {
  constructor() {}

  public async savePdfProcessingRequest(pdf: Buffer): Promise<PdfRequest> {
    const request = await PdfRequest.create();

    thumbnailGenerator.thumbnailGenerator(pdf, request.id);
    return request;
  }

  public async getAllCompletedGenerationJob(): Promise<
    CompletedGenerationJob[]
  > {
    return await CompletedGenerationJob.findAll();
  }
}
