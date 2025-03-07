import pdf, { PDFThumbnailOptions } from "pdf-thumbnail";
import { saveToFileSystem } from "./pdf_storage";

export class ThumbnailGenerator {
  private options: PDFThumbnailOptions = {
    resize: {
      width: 250,
      height: 250,
    },
  };
  constructor() {}

  async thumbnailGenerator(pdfBuffer: Buffer, requestId: string) {
    await saveToFileSystem(pdfBuffer, requestId);
    pdf(pdfBuffer, this.options).then;
  }
}
