import { CompletedGenerationJob } from "../models/completed_generation_job.model";
import { saveToFileSystem } from "./file_storage";
import { generateAndSaveThumbnail } from "./thumbnail_generation";

export async function startProcessing(pdf: Buffer, requestId: string) {
  const pdfFileName = requestId + ".pdf";
  await saveToFileSystem(pdf, pdfFileName);
  const thumbnailFileName = requestId + ".jpg";
  await generateAndSaveThumbnail(pdf, thumbnailFileName);
  await CompletedGenerationJob.create({id: requestId});
}
