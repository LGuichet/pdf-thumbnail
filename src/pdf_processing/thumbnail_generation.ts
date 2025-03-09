import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export async function generateAndSaveThumbnail(
  pdfBuffer: Buffer
): Promise<Buffer> {
  const data = new Uint8Array(pdfBuffer);
  const pdf = await getDocument(data).promise;

  const firstPage = await pdf.getPage(1);

  // Get original page size
  const viewport = firstPage.getViewport({ scale: 1 });
  const { width, height } = viewport;

  // Create canvas with original size
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Render page & resize to 250x250
  await firstPage.render({ canvasContext: ctx, viewport }).promise;
  const resizedCanvas = createCanvas(250, 250);
  const resizedCtx = resizedCanvas.getContext("2d");
  resizedCtx.drawImage(canvas, 0, 0, width, height, 0, 0, 250, 250);

  return resizedCanvas.toBuffer("image/png");
}
