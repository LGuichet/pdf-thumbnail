import {CompletedGenerationJob} from "./models/completed_generation_job.model";
import {PdfRequest} from "./models/pdf_request.model";
import { saveToFileSystem } from "./pdf_storage";

export async function savePdfProcessingRequest(
  pdf: Buffer
): Promise<PdfRequest> {
  const request = await PdfRequest.create();
  const fileName = request.id + ".pdf";
  saveToFileSystem(pdf, fileName);
  return request;
}

export async function getAllCompletedGenerationJob(): Promise<
  CompletedGenerationJob[]
> {
  return await CompletedGenerationJob.findAll();
}
