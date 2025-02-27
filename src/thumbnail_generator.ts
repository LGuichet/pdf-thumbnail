import pdf, { PDFThumbnailOptions } from "pdf-thumbnail"
import { PdfStorage } from './pdf_storage';

export class ThumbnailGenerator {
    private pdfStorage = new PdfStorage();
    private options: PDFThumbnailOptions = {
        compress: {
            type: 'PNG'
        },
        resize: {
            width: 250,
            height: 250,
        }
    }
    constructor(){}

    async thumbnailGenerator(pdfBuffer: Buffer, requestId: string) {
        await this.pdfStorage.saveToFileSystem(pdfBuffer, requestId)
        pdf(pdfBuffer, this.options).then

    }
}