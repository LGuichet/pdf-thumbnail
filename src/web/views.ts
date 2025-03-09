import { PdfRequest } from "../models/pdf_request.model"

export function appInfo() {
    return {
        version: process.env.npm_package_version,
        service: "pdf-thumbnail",
      }
}

export function pdfRequestId(request: PdfRequest) {
    return { id: request.id }
}