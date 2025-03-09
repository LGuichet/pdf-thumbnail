import { readFile, writeFile } from 'fs/promises';

export async function saveToFileSystem(file: Buffer | ReadableStream, fileName: string): Promise<void> {
    await writeFile('./file_storage/' + fileName, file);
}

export async function getFromFileSystem(fileName: string): Promise<Buffer> {
    return await readFile('./file_storage/' + fileName);
}