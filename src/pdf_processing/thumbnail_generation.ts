import * as fs from "fs";
import pdf, { PDFThumbnailOptions } from "pdf-thumbnail";

const options: PDFThumbnailOptions = {
  resize: {
    width: 250,
    height: 250,
  },
};

export async function generateAndSaveThumbnail(
  pdfBuffer: Buffer,
  thumbnailFileName: string
): Promise<void> {
  const path = "./uploads/" + thumbnailFileName;
  await pdf(pdfBuffer, options)
    .then((data) => {
      data.pipe(fs.createWriteStream(path));
      console.log("toto");
    })
    .catch((err) => console.error(err));
}
