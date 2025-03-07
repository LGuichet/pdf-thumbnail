import { readFile, writeFile } from 'fs/promises';

export async function saveToFileSystem(file: Buffer | ReadableStream, fileName: string): Promise<void> {
    await writeFile('./uploads/' + fileName, file);
}

export async function getFromFileSystem(fileName: string): Promise<Buffer> {
    return await readFile('./uploads/' + fileName);
}