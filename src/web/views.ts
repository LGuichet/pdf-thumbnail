import { CompletedGenerationJob } from "../models/completed_generation_job.model";
import { PdfRequest } from "../models/pdf_request.model";

const BASE_URL = "http://localhost:3000";

export type JobView = {
  id: string;
  pdf_url: string;
  thumbnail_url: string;
};

export function appInfo() {
  return {
    version: process.env.npm_package_version,
    service: "pdf-thumbnail",
  };
}

export function pdfRequestId(request: PdfRequest) {
  return { id: request.id };
}

export function completedJobsWithLinks(
  jobs: CompletedGenerationJob[]
): JobView[] {
  const jobList: JobView[] = [];
  jobs.forEach((job) => {
    const id = job.id;
    const jobView = {
      id: id,
      pdf_url: BASE_URL + "/pdfs/" + id,
      thumbnail_url: BASE_URL + "/pdfs/" + id + "/thumbnail",
    };
    jobList.push(jobView);
  });
  return jobList;
}