import {CompletedGenerationJob} from "./models/completed_generation_job.model";
import {PdfRequest} from "./models/pdf_request.model";

export async function savePdfProcessingRequest(
  pdf: Buffer
): Promise<PdfRequest> {
  const request = await PdfRequest.create();
  const fileName = request.id + ".pdf";
  // save buffer to fs here
  return request;
}

export async function getAllCompletedGenerationJob(): Promise<
  CompletedGenerationJob[]
> {
  return await CompletedGenerationJob.findAll();
}
