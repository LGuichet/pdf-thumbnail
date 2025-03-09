import { CompletedGenerationJob } from "./models/completed_generation_job.model";
import { PdfRequest } from "./models/pdf_request.model";
import { startProcessing } from "./pdf_processing/pdf_processor";

export async function savePdfProcessingRequest(
  pdf: Buffer
): Promise<PdfRequest> {
  const request = await PdfRequest.create({ fields: "id" });
  startProcessing(pdf, request.id);
  return request;
}

export async function getAllCompletedGenerationJob(): Promise<
  CompletedGenerationJob[]
> {
  return await CompletedGenerationJob.findAll();
}
